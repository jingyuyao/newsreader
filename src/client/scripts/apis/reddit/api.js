import URI from 'urijs';

import BaseApi from '../base-api';
import DefaultFeed from './default-feed';

class Reddit extends BaseApi {
    constructor() {
        super();

        this.baseUri = URI('https://www.reddit.com/').suffix('json');
    }

    defaultFeed() {
        return new DefaultFeed(this.baseUri);
    }
}

export default Reddit;
