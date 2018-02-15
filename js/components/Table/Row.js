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
        title: data.rank.toString().concat('. ', data.user.data.first_name),
      },
      {
        title: data.quantity === null ? 0 : data.quantity,
      },
    ];

    return row;
  }

  getImage(data) {
    return 'images/college_logos/' + data.northstar_id +'.png';
  }

  render() {
    const content = this.createRow(this.props.data);
    const image = this.getImage(this.props.data);

    return (
      <tr className="table__row">
        <td className="table__cell"><img src={image}/></td>
        {content.map((cell, index) => <td className="table__cell" key={index}>{cell.title}</td>)}
      </tr>
    );
  }
}

export default Row;
