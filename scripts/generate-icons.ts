import { transform } from '@svgr/core';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';

const SVG_DIR = join(import.meta.dirname, '..', 'src', 'icons', 'svg');
const OUT_DIR = join(import.meta.dirname, '..', 'src', 'icons');

function toComponentName(filename: string): string {
  return basename(filename, '.svg')
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase())
    .replace(/^(.)/, (_, c: string) => c.toUpperCase());
}

function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
}

async function generate() {
  await mkdir(SVG_DIR, { recursive: true });

  const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith('.svg'));

  if (files.length === 0) {
    console.log(
      'No SVG files found in src/icons/svg/.\n\n' +
        'To add icons from the Figma icon set:\n' +
        '  1. Open the HDS icon file in Figma\n' +
        '  2. Select icons at your desired weight (e.g., Weight=400)\n' +
        '  3. Export as SVG into src/icons/svg/\n' +
        '  4. Re-run: npm run generate-icons\n',
    );
    return;
  }

  const exports: string[] = [
    "export { Icon } from './Icon';",
    "export type { IconProps } from './Icon';",
  ];

  const iconMeta: Array<{ name: string; componentName: string; filename: string }> = [];

  for (const file of files) {
    const svg = await readFile(join(SVG_DIR, file), 'utf-8');
    const name = toComponentName(file);

    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch?.[1] ?? '0 0 32 32';

    const code = await transform(
      svg,
      {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        typescript: true,
        ref: true,
        svgoConfig: {
          plugins: [
            { name: 'removeViewBox', active: false },
            { name: 'removeXMLNS', active: false },
          ],
        },
        svgProps: {
          width: '{size}',
          height: '{size}',
          viewBox: viewBox,
          fill: 'currentColor',
        },
        replaceAttrValues: {
          '#000': 'currentColor',
          '#000000': 'currentColor',
          black: 'currentColor',
        },
        template: (variables, { tpl }) => {
          return tpl`
import { forwardRef } from 'react';
import type { IconProps } from './Icon';

const ${variables.componentName} = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...props }, ref) => (
    ${variables.jsx}
  ),
);

${variables.componentName}.displayName = '${name}';

export { ${variables.componentName} };
`;
        },
      },
      { componentName: name },
    );

    const patched = code
      .replace(
        /\.\.\.props\n}, ref\)/,
        'style,\n  ...props\n}, ref)',
      )
      .replace(
        /(<svg\b)/,
        '$1 style={{ color: "var(--color-on-background)", ...style }}',
      );

    const outPath = join(OUT_DIR, `${name}.tsx`);
    await writeFile(outPath, patched);
    exports.push(`export { ${name} } from './${name}';`);
    iconMeta.push({ name: toKebabCase(name), componentName: name, filename: file });
    console.log(`  Generated ${name}.tsx`);
  }

  exports.sort((a, b) => a.localeCompare(b));

  const indexPath = join(OUT_DIR, 'index.ts');
  await writeFile(indexPath, exports.join('\n') + '\n');

  const metaContent =
    `/** Auto-generated icon metadata – do not edit manually. */\n` +
    `export const iconMeta = ${JSON.stringify(iconMeta, null, 2)} as const;\n` +
    `export type IconName = (typeof iconMeta)[number]['componentName'];\n`;
  await writeFile(join(OUT_DIR, 'meta.ts'), metaContent);

  console.log(`\nGenerated ${iconMeta.length} icon components.`);
  console.log(`Wrote index.ts with ${exports.length} exports.`);
  console.log('Wrote meta.ts with icon metadata.');
}

generate().catch(console.error);
