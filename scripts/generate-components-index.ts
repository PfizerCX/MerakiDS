import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const COMPONENTS_DIR = join(import.meta.dirname, '..', 'src', 'components');
const INDEX_PATH = join(COMPONENTS_DIR, 'index.ts');

async function generate() {
  const entries = await readdir(COMPONENTS_DIR, { withFileTypes: true });
  const dirs = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort();

  const exports = dirs.map((name) => `export * from './${name}';`);
  await writeFile(INDEX_PATH, exports.join('\n') + '\n', 'utf-8');
  console.log(`Reindexed ${dirs.length} components in src/components/index.ts`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
