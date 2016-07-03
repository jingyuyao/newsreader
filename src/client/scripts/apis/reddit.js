import URI from 'urijs';

import RedditFeed from '../feeds/reddit';

import AbstractApi from './abstract';

export default class Reddit extends AbstractApi {
    constructor() {
        super();

        this.baseUri = URI('https://www.reddit.com/').suffix('json');
    }

    defaultFeed() {
        return new RedditFeed(this.baseUri);
    }
}
