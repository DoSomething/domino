import React from 'react';
import { map } from 'lodash';

import { RestApiClient } from '@dosomething/gateway';
import Table from '../Table';

class Leaderboard extends React.Component {
	constructor() {
		super();

		this.state = {
			jsonReturnedValue: [],
      loading: true,
		}

		this.api = new RestApiClient('https://rogue.dosomething.org/');
	}

	componentDidMount() {
		this.api.get('api/v3/signups', {
			filter: {
				campaign_id: '7536',
			},
			orderBy: 'quantity,desc',
			include: 'accepted_quantity,user',
      // 50 users in the competition
			limit: '50',
		})
	      .then((json) => {
	        this.setState({ jsonReturnedValue: json['data'], loading: false });
	    });
	}

	render() {
		return (
			<div className="table-responsive">
				<Table className="table" headings={['Rank', '', 'Name', '# of Empties']} data={this.state.jsonReturnedValue} loading={this.state.loading} />
			</div>
		);
	}
}

export default Leaderboard;
