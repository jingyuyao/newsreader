import BaseApi from './base-api';
import RedditPost from '../models/reddit/reddit-post';

class Reddit extends BaseApi {
    constructor() {
        super();

        this.baseUrl = 'https://www.reddit.com/';
    }

    frontPage() {
        return fetch(`${this.baseUrl}.json`)
            .then(this.checkStatus)
            .then(this.toJson)
            .then((json) => json.data.children.map((child) => new RedditPost(child.data)));
    }
}

export default Reddit;
