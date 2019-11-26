import fs from 'fs';
import path from 'path';

export default function inlineCssImporter(url, prev) {
  if (!url.endsWith('.css')) {
    return { file: url };
  }

  const resolvedPath = path.resolve(path.dirname(prev), url);

  if (!fs.existsSync(resolvedPath)) {
    return new Error(`Could not find url: ${url}`);
  }

  const contents = fs.readFileSync(resolvedPath, 'utf-8');

  return { contents };
}
