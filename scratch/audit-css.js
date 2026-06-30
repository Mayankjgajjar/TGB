const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.module.css')) {
      results.push(filePath);
    }
  });
  return results;
}

const cssFiles = walk(srcDir);
let output = '';

cssFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  const relativePath = path.relative(srcDir, file);
  
  let headerPrinted = false;
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (/^(padding|margin|gap|max-width|height):/.test(trimmed)) {
      if (!headerPrinted) {
        output += `\n### [${relativePath}](file:///${file.replace(/\\/g, '/')})\n`;
        headerPrinted = true;
      }
      output += `- L${index + 1}: \`${trimmed}\`\n`;
    }
  });
});

console.log(output);
fs.writeFileSync(path.resolve(__dirname, 'audit_report.md'), output);
