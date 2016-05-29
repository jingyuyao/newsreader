/*
 * Creates the app and attaches it to the DOM.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const appRef = ReactDOM.render(<App />, document.getElementById('appContainer'));

export default appRef;
