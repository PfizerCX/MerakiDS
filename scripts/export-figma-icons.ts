/**
 * Batch-exports icons from the HDS-241 Figma file as SVGs using the Figma REST API.
 *
 * Usage:
 *   FIGMA_TOKEN=your_token npx tsx scripts/export-figma-icons.ts
 *
 * Options (env vars):
 *   FIGMA_TOKEN   – (required) Figma Personal Access Token
 *   ICON_WEIGHTS  – Comma-separated weights to export. Default: "400"
 *                   Use "all" for 100,200,300,400,500
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const FILE_KEY = 'izxJJWK7nyygMYrc4hCh7o';
const BATCH_SIZE = 80;
const SVG_DIR = join(import.meta.dirname, '..', 'src', 'icons', 'svg');
const NODES_PATH = join(import.meta.dirname, 'icon-nodes.json');

interface IconNode {
  category: string;
  name: string;
  weight: number;
  nodeId: string;
}

function toFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function figmaGet(path: string, token: string): Promise<unknown> {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { 'X-Figma-Token': token },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${res.status}: ${text}`);
  }
  return res.json();
}

async function main() {
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error(
      'Missing FIGMA_TOKEN. Generate one at:\n' +
        '  https://www.figma.com/developers → Personal access tokens\n\n' +
        'Then run:\n' +
        '  FIGMA_TOKEN=your_token npx tsx scripts/export-figma-icons.ts',
    );
    process.exit(1);
  }

  const weightsEnv = process.env.ICON_WEIGHTS ?? '400';
  const weights =
    weightsEnv === 'all'
      ? [100, 200, 300, 400, 500]
      : weightsEnv.split(',').map(Number);

  console.log(`Exporting weights: ${weights.join(', ')}`);

  const allNodes: IconNode[] = JSON.parse(await readFile(NODES_PATH, 'utf-8'));

  const filtered = allNodes.filter((n) => weights.includes(n.weight));

  const deduped = new Map<string, IconNode>();
  for (const node of filtered) {
    const key = `${node.name}__${node.weight}`;
    if (!deduped.has(key)) {
      deduped.set(key, node);
    }
  }

  const nodes = [...deduped.values()];
  console.log(`${nodes.length} icons to export (${deduped.size} unique name+weight combos)\n`);

  for (const w of weights) {
    const dir = weights.length === 1 && w === 400 ? SVG_DIR : join(SVG_DIR, `w${w}`);
    await mkdir(dir, { recursive: true });
  }
  if (weights.length === 1 && weights[0] === 400) {
    await mkdir(SVG_DIR, { recursive: true });
  }

  const batches: IconNode[][] = [];
  for (let i = 0; i < nodes.length; i += BATCH_SIZE) {
    batches.push(nodes.slice(i, i + BATCH_SIZE));
  }

  console.log(`Fetching SVG URLs in ${batches.length} batches...\n`);

  const urlMap = new Map<string, string>();

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const ids = batch.map((n) => n.nodeId).join(',');

    console.log(`  Batch ${i + 1}/${batches.length} (${batch.length} icons)...`);

    const data = (await figmaGet(
      `/images/${FILE_KEY}?ids=${ids}&format=svg&svg_include_id=false&svg_simplify_stroke=true`,
      token,
    )) as { images: Record<string, string | null> };

    for (const [nodeId, url] of Object.entries(data.images)) {
      if (url) urlMap.set(nodeId, url);
    }

    if (i < batches.length - 1) await sleep(500);
  }

  console.log(`\nGot ${urlMap.size} SVG URLs. Downloading...\n`);

  let downloaded = 0;
  let failed = 0;

  const downloadBatchSize = 20;
  const nodeList = [...nodes];

  for (let i = 0; i < nodeList.length; i += downloadBatchSize) {
    const batch = nodeList.slice(i, i + downloadBatchSize);

    await Promise.all(
      batch.map(async (node) => {
        const url = urlMap.get(node.nodeId);
        if (!url) {
          failed++;
          return;
        }

        try {
          const res = await fetch(url);
          if (!res.ok) {
            console.error(`  Failed to download ${node.name} w${node.weight}: ${res.status}`);
            failed++;
            return;
          }

          const svg = await res.text();
          const filename = `${toFilename(node.name)}.svg`;
          const dir =
            weights.length === 1 && node.weight === 400
              ? SVG_DIR
              : join(SVG_DIR, `w${node.weight}`);

          await writeFile(join(dir, filename), svg);
          downloaded++;
        } catch (err) {
          console.error(`  Error downloading ${node.name} w${node.weight}:`, err);
          failed++;
        }
      }),
    );

    if (i % 100 === 0 && i > 0) {
      console.log(`  ${downloaded} downloaded...`);
    }
  }

  console.log(`\nDone! ${downloaded} SVGs saved, ${failed} failed.`);

  if (weights.length === 1 && weights[0] === 400) {
    console.log(`\nSVGs saved to: src/icons/svg/`);
  } else {
    console.log(`\nSVGs saved to: src/icons/svg/w{weight}/`);
  }

  console.log(
    '\nNext step: run `npm run generate-icons` to create React components.',
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
