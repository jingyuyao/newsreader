import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

import Reddit from './apis/reddit';
import PostBrowser from './components/post-browser';

class App extends React.Component {
    constructor(props) {
        super(props);

        // TODO: Make this generic
        const reddit = new Reddit();
        this.state = {
            postFeed: reddit.frontPage()
        };
    }

    render() {
        return (
            <div className='app'>
                <Appbar className='appbar'>
                    <span className='mui--text-display1'>Title</span>
                </Appbar>
                <PostBrowser postFeed={this.state.postFeed} />
            </div>
        );
    }
}

export default App;
