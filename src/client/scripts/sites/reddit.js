import RedditApi from '../apis/reddit';

import AbstractSite from './abstract';

export default class RedditSite extends AbstractSite {
    constructor() {
        super(new RedditApi());
    }

    getCurrentFeed() {
        return this.api.defaultFeed();
    }
}
