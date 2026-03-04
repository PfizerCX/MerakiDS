import { forwardRef, useState, useCallback } from 'react';
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

function SortIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 2l3 4H5l3-4zM8 14l-3-4h6l-3 4z" />
    </svg>
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
        scope="col"
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
              {sort && <SortIcon className="mds-table-head-cell-icon" />}
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
                  showSortIcon={col.showSortIcon}
                  showInfoIcon={col.showInfoIcon}
                  showDropdownIcon={col.showDropdownIcon}
                  style={col.width != null ? { width: col.width } : undefined}
                >
                  {col.header}
                </CellHead>
              ))}
              {showActionColumn && <CellHead type="spacer" />}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const rowStyle =
                zebraStriped && rowIndex % 2 === 1 ? 'secondary' : 'normal';
              return (
                <tr key={rowIndex}>
                  {showSelectionColumn && (
                    <TableCell cellType="checkbox" rowStyle={rowStyle}>
                      <input
                        type="checkbox"
                        className="mds-table-checkbox"
                        checked={selected.has(rowIndex)}
                        onChange={(e) => handleSelectRow(rowIndex, e.target.checked)}
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
                        onClick={() => onRowAction?.(rowIndex)}
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
