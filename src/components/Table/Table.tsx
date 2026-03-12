import { forwardRef, useState, useCallback, useMemo } from 'react';
import { CalendarToday } from '../../icons/CalendarToday';
import { Info } from '../../icons/Info';
import { MenuDotVertical } from '../../icons/MenuDotVertical';
import { ChevronDown } from '../../icons/ChevronDown';
import './Table.css';

/* ---------------------------------------------------------------------------
   Types
   --------------------------------------------------------------------------- */

export interface TableColumn {
  key: string;
  header: string;
  type?: 'text' | 'profile' | 'chip' | 'date';
  showSortIcon?: boolean;
  showInfoIcon?: boolean;
  showDropdownIcon?: boolean;
  width?: string | number;
}

export interface TableRow {
  [key: string]: React.ReactNode;
}
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn[];
  data: TableRow[];
  showSelectionColumn?: boolean;
  showActionColumn?: boolean;
  showInlineHeader?: boolean;
  inlineHeaderTitle?: string;
  zebraStriped?: boolean;
  onRowAction?: (rowIndex: number) => void;
  onSelectionChange?: (selectedIndices: Set<number>) => void;
}

/* ---------------------------------------------------------------------------
   Sort Icon (inline SVG matching Figma import_export icon)
   --------------------------------------------------------------------------- */

function SortIcon({
  className,
  direction,
}: {
  className?: string;
  direction?: 'asc' | 'desc' | null;
}) {
  return (
    <ChevronDown
      size={16}
      className={className}
      data-direction={direction ?? undefined}
      aria-hidden
    />
  );
}

/* ---------------------------------------------------------------------------
   CellHead
   --------------------------------------------------------------------------- */

interface CellHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  type?: 'column' | 'select-all' | 'spacer';
  showSortIcon?: boolean;
  showInfoIcon?: boolean;
  showDropdownIcon?: boolean;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  allSelected?: boolean;
  onSelectAll?: (checked: boolean) => void;
}

const CellHead = forwardRef<HTMLTableCellElement, CellHeadProps>(
  (
    {
      type = 'column',
      showSortIcon: sort = false,
      showInfoIcon: info = false,
      showDropdownIcon: dropdown = false,
      sortable = false,
      sortDirection = null,
      allSelected,
      onSelectAll,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <th
        ref={ref}
        className={['mds-table-head-cell', className].filter(Boolean).join(' ')}
        data-type={type !== 'column' ? type : undefined}
        data-sortable={type === 'column' && sortable ? 'true' : undefined}
        data-sort-direction={type === 'column' ? sortDirection ?? undefined : undefined}
        scope="col"
        aria-sort={
          type === 'column'
            ? sortDirection === 'asc'
              ? 'ascending'
              : sortDirection === 'desc'
                ? 'descending'
                : 'none'
            : undefined
        }
        {...props}
      >
        <div className="mds-table-head-cell-content">
          {type === 'select-all' ? (
            <input
              type="checkbox"
              className="mds-table-checkbox"
              checked={allSelected}
              onChange={(e) => onSelectAll?.(e.target.checked)}
              aria-label="Select all rows"
            />
          ) : type === 'column' ? (
            <>
              <span>{children}</span>
              {sort && (
                <SortIcon
                  className="mds-table-head-cell-icon mds-table-sort-indicator"
                  direction={sortDirection}
                />
              )}
              {info && <Info size={16} className="mds-table-head-cell-icon" />}
              {dropdown && <ChevronDown size={16} className="mds-table-head-cell-icon" />}
            </>
          ) : null}
        </div>
      </th>
    );
  },
);

CellHead.displayName = 'CellHead';

/* ---------------------------------------------------------------------------
   TableCell
   --------------------------------------------------------------------------- */

interface TableCellInternalProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  cellType?: 'text' | 'profile' | 'chip' | 'date' | 'checkbox' | 'action';
  rowStyle?: 'normal' | 'secondary';
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellInternalProps>(
  ({ cellType = 'text', rowStyle = 'normal', className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={['mds-table-cell', className].filter(Boolean).join(' ')}
        data-cell-type={cellType}
        data-row-style={rowStyle !== 'normal' ? rowStyle : undefined}
        {...props}
      >
        <div className="mds-table-cell-content">{children}</div>
      </td>
    );
  },
);

TableCell.displayName = 'TableCell';

/* ---------------------------------------------------------------------------
   Cell renderers by type
   --------------------------------------------------------------------------- */

interface ProfileValue {
  name: string;
  avatar?: string;
}

function isProfileValue(value: unknown): value is ProfileValue {
  return typeof value === 'object' && value !== null && 'name' in value;
}

function renderCellContent(value: React.ReactNode, type: TableColumn['type']) {
  switch (type) {
    case 'profile': {
      if (isProfileValue(value)) {
        return (
          <>
            {value.avatar && <img className="mds-table-cell-avatar" src={value.avatar} alt="" />}
            <span>{value.name}</span>
          </>
        );
      }
      return <span>{value}</span>;
    }
    case 'chip':
      return <span className="mds-table-chip">{value as React.ReactNode}</span>;
    case 'date':
      return (
        <>
          <span>{value as React.ReactNode}</span>
          <CalendarToday size={16} className="mds-table-cell-date-icon" />
        </>
      );
    default:
      return value;
  }
}

type SortDirection = 'asc' | 'desc';

function getSortableValue(value: React.ReactNode, type: TableColumn['type']): string | number {
  if (type === 'profile' && isProfileValue(value)) {
    return value.name;
  }
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? 1 : 0;
  if (value == null) return '';
  return String(value);
}

/* ---------------------------------------------------------------------------
   Table
   --------------------------------------------------------------------------- */

const Table = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      columns,
      data,
      showSelectionColumn = false,
      showActionColumn = false,
      showInlineHeader = false,
      inlineHeaderTitle = 'Inline Table Header',
      zebraStriped = true,
      onRowAction,
      onSelectionChange,
      className,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [sortState, setSortState] = useState<{
      key: string | null;
      direction: SortDirection | null;
    }>({ key: null, direction: null });

    const handleSelectAll = useCallback(
      (checked: boolean) => {
        const next = checked ? new Set(data.map((_, i) => i)) : new Set<number>();
        setSelected(next);
        onSelectionChange?.(next);
      },
      [data, onSelectionChange],
    );

    const handleSelectRow = useCallback(
      (index: number, checked: boolean) => {
        setSelected((prev) => {
          const next = new Set(prev);
          if (checked) next.add(index);
          else next.delete(index);
          onSelectionChange?.(next);
          return next;
        });
      },
      [onSelectionChange],
    );

    const allSelected = data.length > 0 && selected.size === data.length;
    const sortedRows = useMemo(() => {
      const mapped = data.map((row, sourceIndex) => ({ row, sourceIndex }));
      if (!sortState.key || !sortState.direction) return mapped;

      const col = columns.find((c) => c.key === sortState.key);
      if (!col) return mapped;

      const dir = sortState.direction === 'asc' ? 1 : -1;
      return [...mapped].sort((a, b) => {
        const av = getSortableValue(a.row[col.key], col.type);
        const bv = getSortableValue(b.row[col.key], col.type);

        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * dir;
        }

        return String(av).localeCompare(String(bv), undefined, {
          numeric: true,
          sensitivity: 'base',
        }) * dir;
      });
    }, [data, columns, sortState]);

    const handleSortColumn = useCallback((columnKey: string) => {
      setSortState((prev) => {
        if (prev.key !== columnKey) return { key: columnKey, direction: 'asc' };
        if (prev.direction === 'asc') return { key: columnKey, direction: 'desc' };
        if (prev.direction === 'desc') return { key: null, direction: null };
        return { key: columnKey, direction: 'asc' };
      });
    }, []);

    return (
      <div
        ref={ref}
        className={['mds-table-wrapper', className].filter(Boolean).join(' ')}
        {...props}
      >
        {showInlineHeader && (
          <div className="mds-table-inline-header">
            <span className="mds-table-inline-header-title">{inlineHeaderTitle}</span>
          </div>
        )}

        <table className="mds-table">
          <thead>
            <tr>
              {showSelectionColumn && (
                <CellHead
                  type="select-all"
                  allSelected={allSelected}
                  onSelectAll={handleSelectAll}
                />
              )}
              {columns.map((col) => (
                <CellHead
                  key={col.key}
                  sortable
                  sortDirection={sortState.key === col.key ? sortState.direction : null}
                  showSortIcon={col.showSortIcon}
                  showInfoIcon={col.showInfoIcon}
                  showDropdownIcon={col.showDropdownIcon}
                  style={col.width != null ? { width: col.width } : undefined}
                  onClick={() => handleSortColumn(col.key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSortColumn(col.key);
                    }
                  }}
                >
                  {col.header}
                </CellHead>
              ))}
              {showActionColumn && <CellHead type="spacer" />}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map(({ row, sourceIndex }, rowIndex) => {
              const rowStyle =
                zebraStriped && rowIndex % 2 === 1 ? 'secondary' : 'normal';
              return (
                <tr key={sourceIndex}>
                  {showSelectionColumn && (
                    <TableCell cellType="checkbox" rowStyle={rowStyle}>
                      <input
                        type="checkbox"
                        className="mds-table-checkbox"
                        checked={selected.has(sourceIndex)}
                        onChange={(e) => handleSelectRow(sourceIndex, e.target.checked)}
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      cellType={col.type ?? 'text'}
                      rowStyle={rowStyle}
                    >
                      {renderCellContent(row[col.key], col.type)}
                    </TableCell>
                  ))}
                  {showActionColumn && (
                    <TableCell cellType="action" rowStyle={rowStyle}>
                      <button
                        type="button"
                        className="mds-table-action-btn"
                        onClick={() => onRowAction?.(sourceIndex)}
                        aria-label={`Actions for row ${rowIndex + 1}`}
                      >
                        <MenuDotVertical size={24} />
                      </button>
                    </TableCell>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
);

Table.displayName = 'Table';

export { Table, CellHead, TableCell };
