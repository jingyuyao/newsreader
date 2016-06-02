import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

import RedditApi from './apis/reddit/api';
import RedditPostBrowser from './components/reddit/post-browser';

class App extends React.Component {
    constructor(props) {
        super(props);

        // TODO: Create a concept of Site(?) that provides api, feed, browser class
        // and the associated logic to switch feeds. Logic to switch feeds probably
        // will live in the "App" level.
        const redditApi = new RedditApi();
        this.state = {
            api: redditApi,
            postFeed: redditApi.defaultFeed(),
            PostBrowserClass: RedditPostBrowser
        };
    }

    render() {
        const PostBrowserClass = this.state.PostBrowserClass;
        return (
            <div className='app'>
                <Appbar className='appbar'>
                    <span className='mui--text-display1'>Title</span>
                </Appbar>
                <PostBrowserClass postFeed={this.state.postFeed} />
            </div>
        );
    }
}

export default App;
