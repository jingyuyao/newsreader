import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

import FeedBrowser from './components/feed-browser';
import RedditSite from './sites/reddit';

/**
 * Entry point for the entire app.
 * This class is responsible for managing the current site.
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.site = this.getSite();
        this.state = {
            feed: this.site.getCurrentFeed()
        };
    }

    render() {
        return (
            <div className='app'>
                <Appbar className='appbar'>
                    <span className='mui--text-display1'>NewsReader</span>
                </Appbar>
                <FeedBrowser feed={this.state.feed}/>
            </div>
        );
    }

    getSite() {
        // TODO: Implement selection when we support multiple sites
        return new RedditSite();
    }
}
