import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import Row from './Row';
import './table.scss';

class Table extends React.Component {
  render() {
    const heading = this.props.headings.map((title, index) => <th key={index} className="table__cell"><h3 className="heading -delta">{title}</h3></th>);

    const rows = this.props.data.map((content, index) => {
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

Table.propTypes = {
  headings: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Table;