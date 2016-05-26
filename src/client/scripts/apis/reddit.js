import BaseApi from './base-api';

class Reddit extends BaseApi {
    constructor() {
        super();
        this.baseUrl = 'https://www.reddit.com/';
    }

    frontPage() {
        return fetch(`${this.baseUrl}.json`)
            .then(this.checkStatus)
            .then(this.toJson)
            .then((json) => json.data.children.map((child) => child.data));
    }
}

export default Reddit;
