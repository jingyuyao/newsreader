import React from 'react';
import ReactDOM from 'react-dom';

import Reddit from './apis/Reddit';
import MainView from './components/MainView';

const reddit = new Reddit();

ReactDOM.render(<MainView api={reddit} />, document.getElementById('app-container'));
