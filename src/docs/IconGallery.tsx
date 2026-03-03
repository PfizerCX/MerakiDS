import React, { useState, useMemo } from 'react';
import { iconCatalog, type IconCategory } from '../icons/catalog';
import * as Icons from '../icons';

type IconComponent = React.ComponentType<Icons.IconProps>;

const IconsMap = Icons as unknown as Record<string, IconComponent | undefined>;

function toComponentName(kebab: string): string {
  return kebab
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase())
    .replace(/^(.)/, (_, c: string) => c.toUpperCase());
}

function getIcon(componentName: string): IconComponent | null {
  const comp = IconsMap[componentName];
  return comp ?? null;
}

const wrapper: React.CSSProperties = {
  fontFamily: 'var(--font-family-base, sans-serif)',
  color: 'var(--color-on-background, #00003a)',
};

const searchInput: React.CSSProperties = {
  width: '100%',
  maxWidth: 420,
  padding: '10px 14px',
  fontSize: 14,
  border: '1px solid var(--color-border, #c9c9c9)',
  borderRadius: 'var(--radius-2, 8px)',
  background: 'var(--color-surface, #fff)',
  color: 'var(--color-on-background, #00003a)',
  outline: 'none',
  marginBottom: 24,
};

const categoryTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  margin: '32px 0 12px',
  paddingBottom: 8,
  borderBottom: '1px solid var(--color-border, #e0e0e0)',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: 8,
};

const cell: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  padding: '16px 8px',
  borderRadius: 'var(--radius-2, 8px)',
  border: '1px solid var(--color-border, #e0e0e0)',
  background: 'var(--color-surface, #fff)',
  cursor: 'pointer',
  transition: 'background 0.15s, box-shadow 0.15s',
};

const cellHover: React.CSSProperties = {
  background: 'var(--color-surface-variant, #f5f5f8)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
};

const iconLabel: React.CSSProperties = {
  fontSize: 11,
  fontFamily: 'var(--font-family-mono, monospace)',
  textAlign: 'center',
  wordBreak: 'break-word',
  lineHeight: 1.3,
  color: 'var(--color-text-secondary, #3d3d3d)',
};

const placeholderBox: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 4,
  background: 'var(--color-border, #e0e0e0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 10,
  color: 'var(--color-text-secondary, #3d3d3d)',
};

const statsBadge: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 12,
  fontFamily: 'var(--font-family-mono, monospace)',
  padding: '2px 8px',
  borderRadius: 12,
  background: 'var(--color-primary, #2e29ff)',
  color: '#fff',
  marginLeft: 8,
  verticalAlign: 'middle',
};

const emptyState: React.CSSProperties = {
  textAlign: 'center',
  padding: '48px 16px',
  color: 'var(--color-text-secondary, #3d3d3d)',
  fontSize: 14,
};

function IconCell({ name, componentName }: { name: string; componentName: string }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const Comp = getIcon(componentName);

  const handleClick = () => {
    const importStr = `import { ${componentName} } from '@meraki-ds/components/icons';`;
    navigator.clipboard?.writeText(importStr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={hovered ? { ...cell, ...cellHover } : cell}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      title={copied ? 'Copied!' : `Click to copy import for ${componentName}`}
    >
      {Comp ? (
        <Comp size={32} />
      ) : (
        <div style={placeholderBox}>SVG</div>
      )}
      <span style={iconLabel}>
        {copied ? 'Copied!' : name}
      </span>
    </div>
  );
}

export function IconGallery() {
  const [search, setSearch] = useState('');
  const query = search.toLowerCase().trim();

  const totalIcons = useMemo(
    () => Object.values(iconCatalog).reduce((sum, arr) => sum + arr.length, 0),
    [],
  );

  const availableCount = useMemo(() => {
    let count = 0;
    for (const icons of Object.values(iconCatalog)) {
      for (const n of icons) {
        if (getIcon(toComponentName(n))) count++;
      }
    }
    return count;
  }, []);

  const filtered = useMemo(() => {
    const result: Array<{ category: IconCategory; icons: Array<{ name: string; componentName: string }> }> = [];

    for (const [cat, icons] of Object.entries(iconCatalog) as Array<[IconCategory, readonly string[]]>) {
      const matched = icons
        .filter((n) => {
          if (!query) return true;
          return n.includes(query) || toComponentName(n).toLowerCase().includes(query) || cat.toLowerCase().includes(query);
        })
        .map((n) => ({ name: n, componentName: toComponentName(n) }));

      if (matched.length > 0) {
        result.push({ category: cat, icons: matched });
      }
    }

    return result;
  }, [query]);

  const matchCount = filtered.reduce((sum, g) => sum + g.icons.length, 0);

  return (
    <div style={wrapper}>
      <input
        type="text"
        placeholder="Search icons by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchInput}
      />

      <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #3d3d3d)', margin: '0 0 24px' }}>
        <strong>{availableCount}</strong> generated
        {' / '}
        <strong>{totalIcons}</strong> in catalog
        {query && (
          <>
            {' · '}
            <strong>{matchCount}</strong> matching "<em>{search}</em>"
          </>
        )}
        {' · '}
        Click an icon to copy its import statement.
      </p>

      {filtered.length === 0 && (
        <div style={emptyState}>
          No icons match "{search}". Try a different search term.
        </div>
      )}

      {filtered.map(({ category, icons }) => (
        <div key={category}>
          <h3 style={categoryTitle}>
            {category}
            <span style={statsBadge}>{icons.length}</span>
          </h3>
          <div style={grid}>
            {icons.map(({ name, componentName }) => (
              <IconCell key={name} name={name} componentName={componentName} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
