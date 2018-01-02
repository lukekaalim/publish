import React from 'react';
import './style.css';

const displayCell = (cell, index) => (
  <td className="dataTable--cell" key={index}>
    {cell}
  </td>
);

const displayRow = (row, index) => (
  <tr className="dataTable--row" key={index}>
    {row.map(displayCell)}
  </tr>
);

const displayColumn = (column, index) => (
  <th className="dataTable--column dataTable--cell" key={index}>
    {column}
  </th>
);

const DataTable = ({ columns, rows }) => (
  <table className="dataTable--root">
    <thead>
      <tr className="dataTable--row">{ columns.map(displayColumn) }</tr>
    </thead>
    <tbody>{ rows.map(displayRow) }</tbody>
  </table>
);

export default DataTable;
