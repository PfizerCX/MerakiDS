import React from 'react';

const swatch: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: 8,
  border: '1px solid #e0e0e0',
  flexShrink: 0,
};

const swatchRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '8px 0',
};

const label: React.CSSProperties = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: 13,
  color: '#3d3d3d',
};

const value: React.CSSProperties = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: 13,
  color: '#666666',
  marginLeft: 'auto',
  textTransform: 'uppercase' as const,
};

const section: React.CSSProperties = {
  marginBottom: 40,
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: 8,
};

interface ColorEntry {
  token: string;
  hex: string;
}

function ColorSwatch({ token, hex }: ColorEntry) {
  return (
    <div style={swatchRow}>
      <div style={{ ...swatch, backgroundColor: hex }} />
      <div>
        <div style={label}>{token}</div>
        <div style={value}>{hex}</div>
      </div>
    </div>
  );
}

function ColorPalette({ name, colors }: { name: string; colors: ColorEntry[] }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h4 style={{ margin: '0 0 8px', color: '#00003a' }}>{name}</h4>
      <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
        {colors.map((c) => (
          <div
            key={c.token}
            style={{
              flex: 1,
              height: 64,
              backgroundColor: c.hex,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: 4,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontFamily: 'var(--font-family-mono)',
                color: parseInt(c.token.replace(/\D/g, '') || '50', 10) >= 50 ? '#fff' : '#00003a',
              }}
            >
              {c.token.split('-').pop()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorTokens() {
  const palettes: { name: string; colors: ColorEntry[] }[] = [
    {
      name: 'Blue',
      colors: [
        { token: 'blue-10', hex: '#e8f2ff' }, { token: 'blue-20', hex: '#cfdfff' },
        { token: 'blue-30', hex: '#9cc0ff' }, { token: 'blue-40', hex: '#6397ff' },
        { token: 'blue-50', hex: '#3578ff' }, { token: 'blue-60', hex: '#2e29ff' },
        { token: 'blue-70', hex: '#0000c9' }, { token: 'blue-80', hex: '#00009d' },
        { token: 'blue-90', hex: '#000067' }, { token: 'blue-100', hex: '#00003a' },
      ],
    },
    {
      name: 'Cyan',
      colors: [
        { token: 'cyan-10', hex: '#e0f5ff' }, { token: 'cyan-20', hex: '#aee4ff' },
        { token: 'cyan-30', hex: '#68d1ff' }, { token: 'cyan-40', hex: '#35b6ff' },
        { token: 'cyan-50', hex: '#0095ff' }, { token: 'cyan-60', hex: '#006eb2' },
        { token: 'cyan-70', hex: '#005589' }, { token: 'cyan-80', hex: '#003e65' },
        { token: 'cyan-90', hex: '#002942' }, { token: 'cyan-100', hex: '#001928' },
      ],
    },
    {
      name: 'Teal',
      colors: [
        { token: 'teal-10', hex: '#d9f9f5' }, { token: 'teal-20', hex: '#adede0' },
        { token: 'teal-30', hex: '#69e3ce' }, { token: 'teal-40', hex: '#29ccb4' },
        { token: 'teal-50', hex: '#00b7a5' }, { token: 'teal-60', hex: '#007c70' },
        { token: 'teal-70', hex: '#005b54' }, { token: 'teal-80', hex: '#003e3e' },
        { token: 'teal-90', hex: '#00292b' }, { token: 'teal-100', hex: '#001c1b' },
      ],
    },
    {
      name: 'Green',
      colors: [
        { token: 'green-10', hex: '#e1f4df' }, { token: 'green-20', hex: '#b8e8b3' },
        { token: 'green-30', hex: '#7edb71' }, { token: 'green-40', hex: '#4dcc3f' },
        { token: 'green-50', hex: '#12b000' }, { token: 'green-60', hex: '#097900' },
        { token: 'green-70', hex: '#075900' }, { token: 'green-80', hex: '#063f00' },
        { token: 'green-90', hex: '#042b00' }, { token: 'green-100', hex: '#021c00' },
      ],
    },
    {
      name: 'Yellow',
      colors: [
        { token: 'yellow-10', hex: '#fff4d4' }, { token: 'yellow-20', hex: '#ffe39e' },
        { token: 'yellow-30', hex: '#ffd36e' }, { token: 'yellow-40', hex: '#ffc522' },
        { token: 'yellow-50', hex: '#f3a600' }, { token: 'yellow-60', hex: '#945e00' },
        { token: 'yellow-70', hex: '#724800' }, { token: 'yellow-80', hex: '#593800' },
        { token: 'yellow-90', hex: '#382300' }, { token: 'yellow-100', hex: '#211700' },
      ],
    },
    {
      name: 'Orange',
      colors: [
        { token: 'orange-10', hex: '#ffece3' }, { token: 'orange-20', hex: '#ffdabb' },
        { token: 'orange-30', hex: '#ffae8a' }, { token: 'orange-40', hex: '#ff8642' },
        { token: 'orange-50', hex: '#ff6600' }, { token: 'orange-60', hex: '#bf3300' },
        { token: 'orange-70', hex: '#8f2600' }, { token: 'orange-80', hex: '#662400' },
        { token: 'orange-90', hex: '#421800' }, { token: 'orange-100', hex: '#260c00' },
      ],
    },
    {
      name: 'Red',
      colors: [
        { token: 'red-10', hex: '#ffe9e9' }, { token: 'red-20', hex: '#ffcccc' },
        { token: 'red-30', hex: '#ff9696' }, { token: 'red-40', hex: '#ff6969' },
        { token: 'red-50', hex: '#ff3241' }, { token: 'red-60', hex: '#c00727' },
        { token: 'red-70', hex: '#990025' }, { token: 'red-80', hex: '#6c001a' },
        { token: 'red-90', hex: '#440010' }, { token: 'red-100', hex: '#26000b' },
      ],
    },
    {
      name: 'Magenta',
      colors: [
        { token: 'magenta-10', hex: '#fde9ff' }, { token: 'magenta-20', hex: '#ffccfa' },
        { token: 'magenta-30', hex: '#ff9cde' }, { token: 'magenta-40', hex: '#ff69be' },
        { token: 'magenta-50', hex: '#ff339e' }, { token: 'magenta-60', hex: '#c50067' },
        { token: 'magenta-70', hex: '#9d0045' }, { token: 'magenta-80', hex: '#740937' },
        { token: 'magenta-90', hex: '#4d0025' }, { token: 'magenta-100', hex: '#2a0a18' },
      ],
    },
    {
      name: 'Violet',
      colors: [
        { token: 'violet-10', hex: '#f3e9ff' }, { token: 'violet-20', hex: '#e2cfff' },
        { token: 'violet-30', hex: '#bfa7ff' }, { token: 'violet-40', hex: '#a68aff' },
        { token: 'violet-50', hex: '#9369ff' }, { token: 'violet-60', hex: '#6d26d8' },
        { token: 'violet-70', hex: '#5a21b0' }, { token: 'violet-80', hex: '#441c82' },
        { token: 'violet-90', hex: '#321a56' }, { token: 'violet-100', hex: '#1f142e' },
      ],
    },
    {
      name: 'Gray',
      colors: [
        { token: 'gray-10', hex: '#f0f0f0' }, { token: 'gray-20', hex: '#e0e0e0' },
        { token: 'gray-30', hex: '#c9c9c9' }, { token: 'gray-40', hex: '#b3b3b3' },
        { token: 'gray-50', hex: '#999999' }, { token: 'gray-60', hex: '#666666' },
        { token: 'gray-70', hex: '#525252' }, { token: 'gray-80', hex: '#3d3d3d' },
        { token: 'gray-90', hex: '#292929' }, { token: 'gray-100', hex: '#171717' },
      ],
    },
  ];

  return (
    <div>
      {palettes.map((p) => (
        <ColorPalette key={p.name} name={p.name} colors={p.colors} />
      ))}
    </div>
  );
}

export function SemanticColors() {
  const tokens: ColorEntry[] = [
    { token: '--color-primary', hex: '#2e29ff' },
    { token: '--color-on-primary', hex: '#ffffff' },
    { token: '--color-primary-container', hex: '#cfdfff' },
    { token: '--color-secondary', hex: '#006eb2' },
    { token: '--color-on-secondary', hex: '#ffffff' },
    { token: '--color-background', hex: '#ffffff' },
    { token: '--color-on-background', hex: '#00003a' },
    { token: '--color-surface', hex: '#ffffff' },
    { token: '--color-on-surface', hex: '#00003a' },
    { token: '--color-surface-variant', hex: '#f0f0f0' },
    { token: '--color-outline-variant', hex: '#c9c9c9' },
    { token: '--color-positive', hex: '#007c70' },
    { token: '--color-positive-container', hex: '#adede0' },
    { token: '--color-negative', hex: '#c00727' },
    { token: '--color-negative-container', hex: '#ffcccc' },
    { token: '--color-cautionary', hex: '#945e00' },
    { token: '--color-cautionary-container', hex: '#ffe39e' },
    { token: '--color-neutral', hex: '#666666' },
  ];

  return (
    <div style={grid}>
      {tokens.map((t) => (
        <ColorSwatch key={t.token} {...t} />
      ))}
    </div>
  );
}

interface TypeRow {
  name: string;
  cssVar: string;
  size: string;
  weight: string | number;
  lineHeight: string;
}

export function TypographyScale() {
  const rows: TypeRow[] = [
    { name: 'Display', cssVar: '--font-size-display', size: '64px', weight: '300 / 700', lineHeight: '1.2' },
    { name: 'Headline Lg', cssVar: '--font-size-headline-lg', size: '48px', weight: '300 / 400 / 700', lineHeight: '1.2' },
    { name: 'Headline M', cssVar: '--font-size-headline-m', size: '42px', weight: '300 / 400 / 700', lineHeight: '1.2' },
    { name: 'Headline S', cssVar: '--font-size-headline-s', size: '34px', weight: '300 / 400 / 700', lineHeight: '1.2' },
    { name: 'Title Lg', cssVar: '--font-size-title-lg', size: '32px', weight: 500, lineHeight: '1.2' },
    { name: 'Title M', cssVar: '--font-size-title-m', size: '24px', weight: 500, lineHeight: '1.2' },
    { name: 'Title S', cssVar: '--font-size-title-s', size: '20px', weight: 500, lineHeight: '1.2' },
    { name: 'Body Lg', cssVar: '--font-size-body-lg', size: '20px', weight: 400, lineHeight: '1.2' },
    { name: 'Body M', cssVar: '--font-size-body-m', size: '16px', weight: 400, lineHeight: '1.2' },
    { name: 'Body S', cssVar: '--font-size-body-s', size: '14px', weight: 400, lineHeight: '1.2' },
    { name: 'Body XS', cssVar: '--font-size-body-xs', size: '12px', weight: 400, lineHeight: '1.2' },
    { name: 'Label M', cssVar: '--font-size-label-m', size: '16px', weight: 500, lineHeight: '1.2' },
    { name: 'Label S', cssVar: '--font-size-label-s', size: '12px', weight: 500, lineHeight: '1.2' },
    { name: 'Button M', cssVar: '--font-size-button-m', size: '16px', weight: 700, lineHeight: '1.2' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #e0e0e0', textAlign: 'left' }}>
          <th style={{ padding: '8px 12px' }}>Role</th>
          <th style={{ padding: '8px 12px' }}>Sample</th>
          <th style={{ padding: '8px 12px' }}>CSS Variable</th>
          <th style={{ padding: '8px 12px' }}>Size</th>
          <th style={{ padding: '8px 12px' }}>Weight</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} style={{ borderBottom: '1px solid #f0f0f0' }}>
            <td style={{ padding: '8px 12px', fontWeight: 600 }}>{r.name}</td>
            <td style={{ padding: '8px 12px', fontSize: r.size, lineHeight: 1.2, fontFamily: 'var(--font-family-sans)' }}>Aa</td>
            <td style={{ padding: '8px 12px', fontFamily: 'var(--font-family-mono)', fontSize: 12, color: '#666' }}>{r.cssVar}</td>
            <td style={{ padding: '8px 12px' }}>{r.size}</td>
            <td style={{ padding: '8px 12px' }}>{r.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SpacingScale() {
  const spacings = [
    { token: '--spacing-0', px: 0 }, { token: '--spacing-2', px: 2 },
    { token: '--spacing-4', px: 4 }, { token: '--spacing-8', px: 8 },
    { token: '--spacing-12', px: 12 }, { token: '--spacing-16', px: 16 },
    { token: '--spacing-24', px: 24 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {spacings.map((s) => (
        <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <code style={{ width: 140, fontSize: 12, color: '#666' }}>{s.token}</code>
          <div style={{ width: s.px, height: 24, backgroundColor: '#2e29ff', borderRadius: 4, minWidth: s.px === 0 ? 2 : undefined, opacity: s.px === 0 ? 0.3 : 1 }} />
          <span style={{ fontSize: 13, color: '#3d3d3d' }}>{s.px}px</span>
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  const radii = [
    { token: '--radius-1', px: 8 }, { token: '--radius-2', px: 16 },
    { token: '--radius-3', px: 24 }, { token: '--radius-4', px: 32 },
    { token: '--radius-5', px: 40 }, { token: '--radius-6', px: 48 },
    { token: '--radius-7', px: 56 }, { token: '--radius-full', px: 10000 },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {radii.map((r) => (
        <div key={r.token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#cfdfff',
              border: '2px solid #2e29ff',
              borderRadius: r.px,
            }}
          />
          <code style={{ fontSize: 11, color: '#666' }}>{r.token}</code>
          <span style={{ fontSize: 12, color: '#3d3d3d' }}>{r.px === 10000 ? 'full' : `${r.px}px`}</span>
        </div>
      ))}
    </div>
  );
}

export function ShadowScale() {
  const shadows = [
    { token: '--shadow-sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
    { token: '--shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
    { token: '--shadow-lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
    { token: '--shadow-xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  ];

  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {shadows.map((s) => (
        <div key={s.token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 96,
              height: 96,
              backgroundColor: '#ffffff',
              borderRadius: 12,
              boxShadow: s.value,
            }}
          />
          <code style={{ fontSize: 11, color: '#666' }}>{s.token}</code>
        </div>
      ))}
    </div>
  );
}
