import React from 'react';

import RedditApi from '../apis/reddit';
import RedditFeedBrowser from '../components/reddit/feed-browser';

import AbstractSite from './abstract';

export default class RedditSite extends AbstractSite {
    render() {
        return <RedditFeedBrowser feed={this.state.feed} />;
    }

    getApi() {
        return new RedditApi();
    }
}
