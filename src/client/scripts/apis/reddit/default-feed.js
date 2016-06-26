import {getJson} from '../../utils/fetch';
import RedditPost from '../../models/reddit/post';

import PostFeed from '../post-feed';

export default class DefaultFeed extends PostFeed {
    constructor(baseUri) {
        super();

        this.baseUri = baseUri;
        // Setting to undefined prevents the param from showing up on first load.
        this.after = undefined;
    }

    hasMore() {
        // TODO: heh
        return true;
    }

    getMore() {
        const url = this.baseUri.query({after: this.after}).toString();

        return getJson(url)
            .then(response => {
                this.after = response.data.after;
                return response.data.children.map(child => new RedditPost(child.data));
            })
            .catch(() => []);
    }
}
