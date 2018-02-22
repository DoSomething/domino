import React from 'react';
import { map } from 'lodash';

class Row extends React.Component {
  constructor() {
    super();
  }

  getImage(data) {
    return 'images/college_logos/' + data.northstar_id +'.png';
  }

  render() {
    const image = this.getImage(this.props.data);
    const firstName = this.props.data.user.data.first_name;
    const quantity = this.props.data.quantity;

    return (
      <tr className="table__row">
        <td className="table__cell"><img src={image}/>{firstName}</td>
        <td className="table__cell">{quantity || 0}</td>
      </tr>
    );
  }
}

export default Row;
