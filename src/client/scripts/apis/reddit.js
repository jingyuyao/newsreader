import URI from 'urijs';

import DefaultFeed from '../feeds/reddit/default';

import AbstractApi from './abstract';

export default class Reddit extends AbstractApi {
    constructor() {
        super();

        this.baseUri = URI('https://www.reddit.com/').suffix('json');
    }

    defaultFeed() {
        return new DefaultFeed(this.baseUri);
    }
}
