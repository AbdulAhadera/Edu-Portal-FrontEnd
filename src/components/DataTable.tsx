import type React from "react";
import type { Column, DataTableProps } from "../data/mockData";

function DataTable<T extends { id: string }>({
    rows,
    columns,
}: DataTableProps<T>) {

    if (!rows.length) {
        return (
            <div className="py-10 text-center text-text-muted">
                No data available
            </div>
        );
    }

    // fallback: auto-generate columns from first row
    const resolvedColumns: Column<T>[] =
        columns ??
        (Object.keys(rows[0]).map((key) => ({
            header: key.replace(/([A-Z])/g, " $1"),
            key: key as keyof T,
        })) as Column<T>[]);

    return (
        <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full border border-ui-border">
                <thead className="bg-ui-hover">
                    <tr> 
                        {resolvedColumns.map((col) => (
                            <th
                                key={String(col.key)}
                                className={`px-4 py-3  text-sm font-semibold text-text-muted
                                    ${col.key === "assignmentSolution" ? "whitespace-nowrap text-center" : " text-left"}`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-ui-hover">
                            {columns?.map((col, colIndex) => {
                                const value = col.key ? row[col.key as keyof typeof row] : undefined;
                                return (
                                    <td
                                        key={colIndex}
                                        className={`px-4 py-3 text-sm text-text-main 
                                        ${col.key === "assignmentSolution" ? " whitespace-nowrap" : ""}`} // ✅ same width here
                                    >
                                        {col.render ? col.render(value, row) : (value as React.ReactNode)}
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