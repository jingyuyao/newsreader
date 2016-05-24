import React from 'react';
import ReactDOM from 'react-dom';

import Reddit from './apis/Reddit.js';
import MainView from './components/MainView.js';

const reddit = new Reddit();

ReactDOM.render(<MainView api={reddit} />, document.getElementById('app-container'));
