const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const hasButton = content.includes('class="theme-toggle"');
      const hasScript = content.includes('src="/theme-toggle.js');
      if (!hasButton || !hasScript) {
        console.log('MISSING: ' + fullPath + ' - Button: ' + hasButton + ', Script: ' + hasScript);
      }
    }
  }
}

walkDir('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app');
console.log('All files checked');