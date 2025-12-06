const fs = require('fs');
const path = require('path');

const PROXY = 'https://vygor-marketing.vercel.app';

// This is where your static files live (relative to the script or absolute)
const STATIC_ROOT = '.'; 

function rewrite(content, currentFilePath) {
  const dir = path.dirname(currentFilePath);

  return content
    // 1. HTML attributes (root-relative, safe)
    .replace(/(href|src|srcset)=(["'])(?!https?:\/\/)(?!\/\/)(\/[^"']+?)\2/g,
      `$1=$2${PROXY}$3$2`)

    // 2. CSS url() — root-relative only
    .replace(/url\(['"]?(?!https?:\/\/)(?!\/\/)(\/[^'")]+)['"]?\)/g,
      `url(${PROXY}$1)`)

    // 3. JS: import/from "....js" 
    .replace(
      /((?:from|import|\(|require\s*\()\s*["'])(?!https?:\/\/)(?!\/\/)((?:\.{1,2}\/)*[^\s"']+\.(?:js|css|json|woff2?|png|jpg|svg|webp))(["'])/gi,
      (match, prefix, relPath, quote) => {
        // Resolve the relative path against the current file's directory
        const absolutePath = path.resolve(dir, relPath);
        // Convert to path relative to STATIC_ROOT
        const relativeToRoot = path.relative(STATIC_ROOT, absolutePath);
        // Normalize to forward slashes for URLs
        const webPath = relativeToRoot.split(path.sep).join('/');
        return `${prefix}${PROXY}/${webPath}${quote}`;
      }
    )

    // 4. (REMOVED) - Quoted asset strings/Vite maps are now ignored.

    // 5. Vite new URL("...", import.meta.url)
    .replace(
      /new\s+URL\s*\(\s*["']([^"']+)["']\s*,\s*import\.meta\.url\s*\)/g,
      (m, relPath) => {
        if (relPath.includes('://') || relPath.startsWith('//')) return m;
        const absolutePath = path.resolve(dir, relPath);
        const webPath = path.relative(STATIC_ROOT, absolutePath).split(path.sep).join('/');
        return `new URL("${PROXY}/${webPath}", import.meta.url)`;
      }
    );
}

function processFile(filePath) {
  // Ignore this script itself (proxy_rewrite.js)
  if (path.resolve(filePath) === path.resolve(__filename)) return;

  if (!/\.(html|js|css|svg|json)$/.test(filePath)) return;

  const original = fs.readFileSync(filePath, 'utf8');
  const updated = rewrite(original, filePath);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
    console.log('Fixed →', path.relative('.', filePath));
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

walk(STATIC_ROOT);
console.log('PERFECTLY DONE!');
console.log('HTML, CSS, Imports, and new URL() fixed.');
console.log('__vite__mapDeps and quoted asset strings were SKIPPED.');