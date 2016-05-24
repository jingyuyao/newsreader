import BaseApi from './BaseApi.js';

class Reddit extends BaseApi {
    constructor() {
        super();
        this.baseUrl = 'https://www.reddit.com/';
    }

    frontPage() {
        return fetch(`${this.baseUrl}.json`)
            .then(this.checkStatus)
            .then(this.toJson)
            .then((json) => {
                return json.data.children.map((child) => child.data);
            });
    }
}

export default Reddit;
