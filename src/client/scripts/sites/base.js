import React from 'react';

import FeedBrowser from '../components/feed-browser';

/*
 * Contains logic to change new feeds.
 */
export default class SiteBase extends React.Component {
    constructor(props) {
        super(props);

        this.getApi = this.getApi.bind(this);
        this.getFeedBrowserClass = this.getFeedBrowserClass.bind(this);

        this.api = this.getApi();

        this.state = {
            postFeed: this.api.defaultFeed()
        };
    }

    render() {
        const FeedBrowserClass = this.getFeedBrowserClass();
        return <FeedBrowserClass postFeed={this.state.postFeed} />;
    }

    getApi() {
        throw 'Not implemented';
    }

    getFeedBrowserClass() {
        return FeedBrowser;
    }
}
