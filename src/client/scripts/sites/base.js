import React from 'react';

import ApiBase from '../apis/base';
import PostBrowser from '../components/post-browser';

/*
 * Contains logic to change new feeds.
 */
class SiteBase extends React.Component {
    constructor(props) {
        super(props);

        this.getApi = this.getApi.bind(this);
        this.getPostBrowserClass = this.getPostBrowserClass.bind(this);

        this.api = this.getApi();

        this.state = {
            postFeed: this.api.defaultFeed()
        };
    }

    render() {
        const PostBrowserClass = this.getPostBrowserClass();
        return <PostBrowserClass postFeed={this.state.postFeed} />;
    }

    getApi() {
        throw "Not implemented";
    }

    getPostBrowserClass() {
        return PostBrowser;
    }
}

export default SiteBase;
