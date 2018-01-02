import React from 'react';
import './style.css';

const MakeEditable = ({ rows, render, inputProps, onEdit }) => (
  <form>
    {render(rows.map((row, rowIndex) => row.map((cell, cellIndex) => (
      <textarea
        className="dataTable--cellInput"
        onChange={event => onEdit(event, rowIndex, cellIndex)}
        type="text"
        value={cell}
        {...inputProps}
      />
    ))))}
  </form>
);

export default MakeEditable;
