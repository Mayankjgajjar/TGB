declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

// Ephemeral in-memory fallback store
const memoryStore = new Map<string, { count: number; resetTime: number }>();

// Cleanup stale memory records every 10 minutes to prevent leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of memoryStore.entries()) {
    if (now > record.resetTime) {
      memoryStore.delete(ip);
    }
  }
}, 600000).unref?.();

/**
 * Checks if a given IP address has exceeded the rate limit (5 requests per hour).
 * Uses Vercel KV REST API if credentials are present; otherwise, falls back to memory.
 */
export async function isRateLimited(ip: string): Promise<boolean> {
  const limit = 5;
  const timeframeSeconds = 3600; // 1 hour

  if (KV_URL && KV_TOKEN) {
    try {
      const key = `rate_limit:${ip}`;
      const now = Math.floor(Date.now() / 1000);

      // Fetch existing record
      const getRes = await fetch(`${KV_URL}/get/${key}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` },
      });
      const getJson = await getRes.json();
      
      let record: { count: number; resetTime: number } | null = null;
      if (getJson.result) {
        try {
          record = JSON.parse(getJson.result);
        } catch {
          record = null;
        }
      }

      if (!record || now > record.resetTime) {
        const newRecord = { count: 1, resetTime: now + timeframeSeconds };
        await fetch(`${KV_URL}/set/${key}/${encodeURIComponent(JSON.stringify(newRecord))}/EX/${timeframeSeconds}`, {
          headers: { Authorization: `Bearer ${KV_TOKEN}` },
        });
        return false;
      }

      if (record.count >= limit) {
        return true;
      }

      record.count += 1;
      const ttl = Math.max(1, record.resetTime - now);
      await fetch(`${KV_URL}/set/${key}/${encodeURIComponent(JSON.stringify(record))}/EX/${ttl}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` },
      });
      return false;
    } catch (err) {
      console.warn('Vercel KV Rate Limiter failed, falling back to memory store:', err);
    }
  }

  // In-Memory Fallback Rate Limiting
  const nowMs = Date.now();
  const record = memoryStore.get(ip);

  if (!record || nowMs > record.resetTime) {
    memoryStore.set(ip, { count: 1, resetTime: nowMs + (timeframeSeconds * 1000) });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}
