import React from 'react';

import './style.css';

const Table = (rows) => <tbody> {rows.map(Row)} </tbody>;

const Row = (cells) => <tr> {cells.map(Cell)} </tr>

const Cell = (cellContents) => <td> {cellContents} </td>

export {
  Table,
  Row,
  Cell,
};
