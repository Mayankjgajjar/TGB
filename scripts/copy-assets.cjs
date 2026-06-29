const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\harsh\\.gemini\\antigravity-ide\\brain\\46a98e59-334a-42b4-bb7a-c7487871125e\\hero_facade_1782639246364.png';
const dest = path.resolve(__dirname, '../public/assets/images/hero-facade.png');

try {
  // Ensure destination folder exists
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied custom-generated facade photo asset.');
  } else {
    console.warn('Source photo asset not found at path: ' + src);
  }
} catch (err) {
  console.error('Error copying photo asset during predev run:', err);
}
