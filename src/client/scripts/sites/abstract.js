import React from 'react';

import FeedBrowser from '../components/feed-browser';

/*
 * Contains logic to change new feeds.
 */
export default class AbstractSite extends React.Component {
    constructor(props) {
        super(props);

        this.getApi = this.getApi.bind(this);

        this.api = this.getApi();
        this.state = {
            feed: this.api.defaultFeed()
        };
    }

    render() {
        return <FeedBrowser feed={this.state.feed} />;
    }

    getApi() {
        throw 'Not implemented';
    }
}
