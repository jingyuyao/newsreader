import URI from 'urijs';

import ApiBase from '../base';
import DefaultFeed from './default-feed';

class Reddit extends ApiBase {
    constructor() {
        super();

        this.baseUri = URI('https://www.reddit.com/').suffix('json');
    }

    defaultFeed() {
        return new DefaultFeed(this.baseUri);
    }
}

export default Reddit;
