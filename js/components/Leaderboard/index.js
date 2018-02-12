import React from 'react';
import { map } from 'lodash';

import { RestApiClient } from '@dosomething/gateway';
import Table from '../Table';

class Leaderboard extends React.Component {
	constructor() {
		super();

		this.state = {
			jsonReturnedValue: []
		}

		this.api = new RestApiClient('http://rogue.test/');
	}

	componentDidMount() {
		this.api.get('api/v3/signups', {
			filter: {
				campaign_id: '1283',
			},
			orderBy: 'quantity,desc'
		})
	      .then((json) => {
	        this.setState({ jsonReturnedValue: json['data'] });
	    });
	}

	render() {
		return (
			<div className="table-responsive container__block">
				<h2>LEADERBOARD</h2>
				<Table className="table" headings={['Name', 'Quantity']} data={this.state.jsonReturnedValue} />
			</div>
		);
	}
}

export default Leaderboard;