import React from 'react';
import { map } from 'lodash';

import Row from './Row';
import './table.scss';

class Table extends React.Component {
  constructor() {
    super();

    this.addRepeatedStandingsRankToUsers = this.addRepeatedStandingsRankToUsers.bind(this);
  }

  addRepeatedStandingsRankToUsers(data) {
    let increment = 1;
    let rank = 1;

    data.forEach(function(element, index) {
      // Don't perform this logic on the first element
      if (index > 0) {
        // Apply "repeated standings" rank and reset it back to 1.
        if (element['quantity'] === data[index - 1]['quantity']) {
          rank = data[index - 1]['rank']
        } else {
          rank += increment;
          increment = 1;
        }
      }

      // Give each row a rank.
      element['rank'] = rank;
    });

    return data;
  }

  render() {
    const heading = this.props.headings.map((title, index) => <th key={index} className="table__cell"><h3 className="heading -delta">{title}</h3></th>);
    const users = this.addRepeatedStandingsRankToUsers(this.props.data);

    const rows = users.map((content, index) => {
      return <Row key={index} data={content} />;
    });

    return (
      <table className="table">
        <thead>
          <th colspan="3" className="table__title">Leaderboard</th>
          <tr className="table__header">
            {heading}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;
