import {getJson} from '../utils/fetch';
import Post from '../models/post';

import AbstractFeed from './abstract';

export default class RedditFeed extends AbstractFeed {
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
                return response.data.children.map(this.createPost);
            })
            .catch(() => []);
    }

    createPost(thing) {
        const data = thing.data;
        return new Post(data.id, data.title, data.url);
    }
}
