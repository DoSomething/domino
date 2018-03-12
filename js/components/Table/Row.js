import React from 'react';
import { map } from 'lodash';

class Row extends React.Component {
  constructor() {
    super();
  }

  getImage(data) {
    return 'images/college_logos/' + data.northstar_id +'.png';
  }

  getCollegeName(data) {
    const collegeNames = {
      // 'northstar_id_here': 'Not Real University',
    };

    return collegeNames[data.northstar_id];
  }

  render() {
    const image = this.getImage(this.props.data);
    const rank = this.props.data.rank.toString().concat('.');
    const firstName = this.props.data.user.data.first_name;
    const collegeName = this.getCollegeName(this.props.data);
    const quantity = this.props.data.quantity;

    return (
      <tr className="table__row">
        <td className="table__cell">{rank}<img src={image}/>{firstName} {collegeName}</td>
        <td className="table__cell">{quantity || 0}</td>
      </tr>
    );
  }
}

export default Row;
