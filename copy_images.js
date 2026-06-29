const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\harsh\\.gemini\\antigravity-ide\\brain\\46a98e59-334a-42b4-bb7a-c7487871125e';
const destDir = 'c:\\Projects\\TGB Enterprise\\public\\assets\\services';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'led_sign_1782668376991.png', dest: 'led_sign.png' },
  { src: 'acp_sign_1782668387620.png', dest: 'acp_sign.png' },
  { src: 'neon_sign_1782668398533.png', dest: 'neon_sign.png' },
  { src: 'acrylic_letters_1782668409953.png', dest: 'acrylic_letters.png' },
  { src: 'ss_letters_1782668422176.png', dest: 'ss_letters.png' },
  { src: 'pylon_sign_1782668434624.png', dest: 'pylon_sign.png' }
];

files.forEach(f => {
  fs.copyFileSync(path.join(srcDir, f.src), path.join(destDir, f.dest));
});
console.log('Copy complete!');
