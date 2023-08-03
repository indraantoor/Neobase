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
        <div
          style={{
            background: "#1F5EFF",
            color: "white",
            textAlign: "center",
          }}
        >
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

  console.log("MY ROWS", { sdsd: prepareRow(rows[0]), rows: rows[0] });

  return (
    <div>
      <table
        {...getTableProps()}
        style={{
          //   background: "Red",
          width: "100%",
          textAlign: "left",
        }}
      >
        <thead
          style={{
            background: "#141B24",
          }}
        >
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  style={{
                    padding: "10px 25px",
                  }}
                  {...column.getHeaderProps()}
                >
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
                      style={{
                        padding: "10px 25px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        color: "#555659",
                      }}
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
