import '@dosomething/forge';
import '../sass/app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import { RestApiClient } from '@dosomething/gateway';

// Helper to decide if the DOM is ready.
export function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Define the React component.
class Leaderboard extends React.Component {
	constructor() {
		super();

		this.state = {
			jsonReturnedValue: null
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
	        this.setState({ jsonReturnedValue: json });
	    });
	}
	render() {
	console.log('hi');
		return (
			<div className="table-responsive container__block">
				<h2>LEADERBOARD</h2>
				<table className="table">
			        <thead>
			        	<tr className="table__header">
			        		<th className="table__cell"><h3 className="heading -delta">Name</h3></th>
			        		<th className="table__cell"><h3 className="heading -delta">Quantity</h3></th>
			        	</tr>
			        </thead>
			        <tbody>
			        	<tr className="table__row">
					        <td className="table__cell" key={1}>Melody</td>
					        <td className="table__cell" key={2}>Jimothy</td>
					        <td className="table__cell" key={3}>Kirstofferson</td>
					    </tr>
			        </tbody>
			    </table>
			</div>
		);
	}
}

// Actually add the component to the page when it is ready.
ready(() => {
	ReactDom.render(
		<Leaderboard />,
		document.getElementById('leaderboard')
	);
})