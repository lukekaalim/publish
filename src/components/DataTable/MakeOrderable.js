import React, { PureComponent } from 'react';

const sortByIndex = (columnIndex, rows, sortingFunction) => {
  const columnToSort = rows.map(row => row[columnIndex]);
  const sortedColumn = columnToSort.sort(sortingFunction);

  const newIndexList = rows.map((row, rowIndex) => {
    const originalValue = row[columnIndex];
    const newIndex = sortedColumn.indexOf(originalValue);
    return rows[newIndex];
  });

  return newIndexList;
};

class MakeOrderable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: -1,
      reversed: false,
    };
  }

  render() {
    const { rows, columns, renderTable, sortingFunctionList } = this.props;
    const { sortedBy, reversed } = this.state;

    const columnsWithButtons = columns.map((column, index) => (
      <button onClick={() => {
        if(sortedBy === index) {
          this.setState({ reversed: !reversed });
        } else {
          this.setState({ sortedBy: index });
        }
      }}>
        {column}
      </button>
    ));

    if(sortedBy != -1) {
      const sortingFunction = sortingFunctionList[sortedBy];
      let sortedRows = rows;
      if(sortingFunction) {
        sortedRows = sortByIndex(sortedBy, rows, sortingFunction);
      }
      if(reversed) {
        sortedRows = [...sortedRows].reverse();
      }
      return <div>{renderTable(sortedRows, columnsWithButtons)}</div>;
    }

    return <div>{renderTable(rows, columnsWithButtons)}</div>;
  }
}

export default MakeOrderable;
