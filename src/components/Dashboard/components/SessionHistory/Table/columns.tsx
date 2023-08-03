import React from "react";

const COLUMNS_DATA = [
  {
    Header: "Sessions start time",
    accessor: "sessions_start_time",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Duration",
    accessor: "duration",
  },
  {
    Header: "Node Used",
    accessor: "node_used",
  },
  {
    Header: "Data Consumed",
    accessor: "data_consumed",
  },
  {
    Header: "Location Of Node",
    accessor: "location_of_node",
  },
];

export const COLUMNS = COLUMNS_DATA.map((column) => {
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
