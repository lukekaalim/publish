import React from 'react';

const Table = ({
  rows,
  columns,
  ColumnFunc = Column,
  RowFunc = Row,
  ...tableProps,
}) => (
  <table {...tableProps}>
    { columns && <thead><tr>{columns.map(ColumnFunc)}</tr></thead>}
    { rows && <tbody>{rows.map(RowFunc)}</tbody>}
  </table>
);

const Column = (columnContents, index) => <th key={index}>{columnContents}</th>;

const Row = (cells, index) => <tr key={index}>{cells.map(Cell)}</tr>

const Cell = (cellContents, index) => <td key={index}>{cellContents}</td>

export {
  Table,
  Column,
  Row,
  Cell,
};
