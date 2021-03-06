import React from 'react';
import { map } from 'lodash';

import Row from './Row';
import './table.scss';

class Table extends React.Component {
  constructor() {
    super();

    this.addRepeatedStandingsRankToUsers = this.addRepeatedStandingsRankToUsers.bind(this);
    this.sortByAcceptedQuantity = this.sortByAcceptedQuantity.bind(this);
  }

  sortByAcceptedQuantity(data) {
    const sortedData = data.sort((a,b) => b.accepted_quantity.data.quantity - a.accepted_quantity.data.quantity);

    return sortedData;
  }

  addRepeatedStandingsRankToUsers(data) {
    let increment = 1;
    let rank = 1;

    data.forEach(function(element, index) {
      // Don't perform this logic on the first element
      if (index > 0) {
        // Apply "repeated standings" rank and reset it back to 1.
        if (element['accepted_quantity']['data']['quantity'] === data[index - 1]['accepted_quantity']['data']['quantity']) {
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
    const sortedData = this.sortByAcceptedQuantity(this.props.data);
    const users = this.addRepeatedStandingsRankToUsers(sortedData);

    if(this.props.loading) {
      return (
        <table className="table">
          <thead>
            <th colspan="3" className="table__title">Leaderboard</th>
            <tr className="table__header">
                <div className="spinner" />
            </tr>
          </thead>
        </table>
      );
    }

    const rows = users.map((content, index) => {
      return <Row key={index} data={content} />;
    });

    return (
      <table className="table">
        <thead>
          <th colspan="4" className="table__title">Leaderboard</th>
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
