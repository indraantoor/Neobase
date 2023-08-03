/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import { useFetchMockData } from "../../../../../hooks/useFetchMockData";

const Table = () => {
  const { data: mockData, isLoading, isError } = useFetchMockData();

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData?.data?.sessionHistory || [], [mockData]);

  const tableInstance = useTable<any>({
    columns,
    data,
  });

  if (isLoading) {
    return <h2 className="px-5 py-6">Loading...</h2>;
  }

  if (isError) {
    return (
      <h2 className="px-5 py-6">
        Something went wrong. Please try again after some time
      </h2>
    );
  }

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
