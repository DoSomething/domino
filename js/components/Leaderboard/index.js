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
				// @TODO: update with new campaign_id
				campaign_id: '7536',
			},
			orderBy: 'quantity,desc',
			include: 'user',
			// @TODO: remove this limit when we go live since
			// there will only be 50 users in real competition.
			// This is just as a placeholder to see data.
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
