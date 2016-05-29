import URI from 'urijs';

import BaseApi from './base-api';
import PostFeed from './post-feed';
import RedditPost from '../models/reddit/reddit-post';

class Reddit extends BaseApi {
    constructor() {
        super();

        this.baseUri = URI('https://www.reddit.com/').suffix('json');
    }

    frontPage() {
        return new FrontPage(this.baseUri);
    }
}

class FrontPage extends PostFeed {
    constructor(baseUri) {
        super(baseUri);

        // Setting to undefined prevents the param from showing up
        // on first load.
        this.after = undefined;
    }

    hasMore() {
        // heh
        return true;
    }

    getMore() {
        const url = this.baseUri.query({after: this.after}).toString()

        return this.getJson(url).then((json) => {
            this.after = json.data.after;
            return json.data.children.map((child) => new RedditPost(child.data));
        });
    }
}

export default Reddit;
