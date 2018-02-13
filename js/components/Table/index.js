import React from 'react';
import { map } from 'lodash';

import Row from './Row';
import './table.scss';

class Table extends React.Component {
  constructor() {
    super();

    this.addRankToUsers = this.addRankToUsers.bind(this);
  }

  addRankToUsers(data) {
    let increment = 1;
    let rank = 1;
    const lastElement = data[data.length - 1];

    data.forEach(function(element, index) {
      // Don't perform this logic on the first element
      if (index > 0) {
        // If the last row quantity equals this rows quantity, just increment.
        if (element['quantity'] === lastElement['quantity']) {
          increment++;
        // Otherwise apply the increment to the rank and reset it back to 1.
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
    const users = this.addRankToUsers(this.props.data);

    const rows = users.map((content, index) => {
      return <Row key={index} data={content} />;
    });

    return (
      <table className="table">
        <thead>
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
