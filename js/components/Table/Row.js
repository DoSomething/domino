import React from 'react';
import { map } from 'lodash';

class Row extends React.Component {
  constructor() {
    super();
  }

  getImage(northstar_id) {
    return 'images/college_logos/' + northstar_id +'.png';
  }

  getCollegeName(northstar_id) {
    const collegeNames = {
      // 'northstar_id_here': 'Not Real University',
    };

    return collegeNames[northstar_id];
  }

  render() {
    const image = this.getImage(this.props.data.northstar_id);
    const rank = this.props.data.rank;
    const firstName = this.props.data.user.data.first_name;
    const collegeName = this.getCollegeName(this.props.data.northstar_id);
    const quantity = this.props.data.quantity;

    return (
      <tr className="table__row">
        <td className="table__cell">{rank}</td>
        <td className="table__cell"><img src={image}/>{firstName}</td>
        <td className="table__cell">{quantity || 0}</td>
      </tr>
    );
  }
}

export default Row;
