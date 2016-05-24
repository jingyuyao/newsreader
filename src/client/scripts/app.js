import React from 'react';
import ReactDOM from 'react-dom';

import Reddit from './apis/Reddit.js';
import MainView from './components/MainView.js';

ReactDOM.render(<MainView api={new Reddit()} />, document.getElementById('container'));
