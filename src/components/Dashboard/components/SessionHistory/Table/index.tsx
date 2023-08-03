/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

const MOCK_DATA = [
  {
    id: 1,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 2,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 3,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 4,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 5,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
  {
    id: 6,
    sessions_start_time: "11:43:23",
    date: "27-03-2023",
    duration: "0.245 sec",
    node_used: "Wineguard",
    data_consumed: "0.12 MB",
    location_of_node: "Singapore",
  },
];

const COLUMNS_DATA = COLUMNS.map((column) => {
  if (column.accessor == "node_used") {
    return {
      ...column,
      Cell: ({ cell }) => (
        <div className="text-sm bg-blue-600 text-white text-center">
          {cell.row.values.node_used}
        </div>
      ),
    };
  }
  return column;
});

const Table = () => {
  const columns = useMemo(() => COLUMNS_DATA, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable<any>({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table
        {...getTableProps()}
        className="w-full"
        style={{
          textAlign: "left",
        }}
      >
        <thead className="bg-gray-900">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th className="p-4" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      className="p-4 border-b border-white/10 text-gray-600"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
