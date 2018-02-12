import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

class Row extends React.Component {
  constructor() {
    super();

    this.createRow = this.createRow.bind(this);
  }

  createRow(data) {
  	console.log(data);
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

Row.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Row;
