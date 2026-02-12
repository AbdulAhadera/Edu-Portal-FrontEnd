import type { DataTableProps } from "../components/baseComponents/BaseType";

function DataTable<T>({
  rows,
  columns,
  className = "px-2 py-2",
}: DataTableProps<T>) {
  if (!rows) {
    return (
      <div className="py-10 text-center text-text-muted">No data available</div>
    );
  }

  const resolvedColumns =
    columns ??
    (Object.keys(rows[0]).map((key) => ({
      key: key as keyof T,
      header: key.toString(),
    })) as any);

  return (
    <div className="overflow-x-auto hide-scrollbar">
      <table className="w-full border border-ui-border">
        <thead className="bg-ui-hover">
          <tr>
            {resolvedColumns.map((col) => (
              <th
                key={String(col.key)}
                className={`${className} text-left text-sm font-semibold text-text-muted`}
              >
               {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-ui-hover">
              {resolvedColumns.map((col, colIndex) => {
                const value = row[col.key];
                return (
                  <td
                    key={colIndex}
                    className={`${className} text-sm text-text-main` }
                  >
                    {col.render ? col.render(value, row) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
