import React from 'react';
import { map } from 'lodash';

class Row extends React.Component {
  constructor() {
    super();

    this.createRow = this.createRow.bind(this);
  }

  createRow(data) {
    const row = [
      {
        title: data.user.data.first_name,
      },
      {
        title: data.quantity === null ? 0 : data.quantity,
      },
    ];

    return row;
  }

  render() {
    const content = this.createRow(this.props.data);

    return (
      <tr className="table__row">
        {content.map((cell, index) => <td className="table__cell" key={index}>{cell.title}</td>)}
      </tr>
    );
  }
}

export default Row;
