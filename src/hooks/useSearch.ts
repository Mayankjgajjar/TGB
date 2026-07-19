import { useMemo } from 'react';

/**
 * Helper function to safely extract nested or array string values from an object for search matching.
 */
function extractSearchableString<T>(item: T, key: string): string {
  if (!item) return '';

  // Handle dot notation for nested objects (e.g., 'overview.description')
  const keys = key.split('.');
  let current: any = item;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return '';
    }
  }

  if (typeof current === 'string') {
    return current.toLowerCase();
  }

  if (Array.isArray(current)) {
    return current.map((val) => (typeof val === 'string' ? val.toLowerCase() : '')).join(' ');
  }

  return '';
}

/**
 * Reusable search hook across Products, Gallery, and Resources.
 */
export function useSearch<T>(items: T[], query: string, searchKeys: string[]): T[] {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return items;

    const terms = trimmed.split(/\s+/);

    return items.filter((item) => {
      // Concatenate text from all searchable keys
      const combinedText = searchKeys.map((key) => extractSearchableString(item, key)).join(' ');

      // Item matches if all query terms appear in the item's combined text
      return terms.every((term) => combinedText.includes(term));
    });
  }, [items, query, searchKeys]);
}
