import React from "react";

const CommonTable = ({ header, record }) => {
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            {header.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {record.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {header.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
