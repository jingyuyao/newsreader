import React from 'react';

import RedditApi from '../apis/reddit/api';
import RedditFeedBrowser from '../components/reddit/feed-browser';

import SiteBase from './base';

export default class RedditSite extends SiteBase {
    render() {
        return <RedditFeedBrowser postFeed={this.state.postFeed} />;
    }

    getApi() {
        return new RedditApi();
    }
}
