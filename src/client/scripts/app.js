import React from 'react';
import ReactDOM from 'react-dom';

import Reddit from './apis/reddit';
import PostBrowser from './components/post-browser';

const reddit = new Reddit();

ReactDOM.render(<PostBrowser api={reddit} />, document.getElementById('appContainer'));
