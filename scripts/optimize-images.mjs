import sharp from 'sharp'
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs'
import { join, parse, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = join(fileURLToPath(import.meta.url), '..')
const publicDir = join(__dirname, '..', 'public')
const extensions = new Set(['.png', '.jpg', '.jpeg'])
const skipped = new Set()

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (extensions.has(parse(entry.name).ext.toLowerCase())) {
      const out = join(dir, `${parse(entry.name).name}.webp`)
      if (existsSync(out) && statSync(out).mtimeMs > statSync(full).mtimeMs) {
        skipped.add(relative(publicDir, full))
        continue
      }
      console.log(`Converting: ${relative(publicDir, full)}`)
      sharp(full).webp({ quality: 82 }).toFile(out)
    }
  }
}

walk(publicDir)

if (skipped.size) {
  console.log(`\nSkipped ${skipped.size} already up-to-date:`)
  for (const f of skipped) console.log(`  ${f}`)
}
console.log('\nDone.')
