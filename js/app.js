import '@dosomething/forge';
import '../sass/app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';

// Just a helper to decide if the DOM is ready. Can move into a helpers.js file if you want.
export function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Define the react component. You can break this out into it's own component file and import it onto the page.
class Example extends React.Component {
    render() {
        return (<p>Adding an example component</p>);
    }
}

// Actually add the component to the page when it is ready.
ready(() => {
    ReactDom.render(
        <Example />,
        document.getElementById('root')
    );
});
