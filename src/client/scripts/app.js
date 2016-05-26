import React from 'react';
import ReactDOM from 'react-dom';

import Reddit from './apis/reddit';
import MainView from './components/main-view';

const reddit = new Reddit();

ReactDOM.render(<MainView api={reddit} />, document.getElementById('appContainer'));
