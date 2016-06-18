import PostFeed from '../post-feed';
import RedditPost from '../../models/reddit/post';

export default class DefaultFeed extends PostFeed {
    constructor(baseUri) {
        super();

        this.baseUri = baseUri;
        // Setting to undefined prevents the param from showing up
        // on first load.
        this.after = undefined;
    }

    hasMore() {
        // heh
        return true;
    }

    getMore() {
        const url = this.baseUri.query({after: this.after}).toString();

        return this.getJson(url).then(json => {
            this.after = json.data.after;
            return json.data.children.map(child => new RedditPost(child.data));
        });
    }
}
