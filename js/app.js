import '@dosomething/forge';
import '../sass/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';

import Leaderboard from './components/Leaderboard'

// Helper to decide if the DOM is ready.
export function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


// Actually add the component to the page when it is ready.
ready(() => {
	ReactDom.render(
		<Leaderboard />,
		document.getElementById('leaderboard')
	);
})