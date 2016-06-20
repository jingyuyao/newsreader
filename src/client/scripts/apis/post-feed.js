/* A (in)finite feed of posts.*/
export default class PostFeed {
    /**
     * Check if there are more posts in this feed.
     * @return {Boolean} Whether there are more posts.
     */
    hasMore() {
        throw 'Not implemented';
    }

    /**
     * Fetch more posts. Caller should check hasMore() before calling
     * this method.
     * @return {Promise} A promise that resolves to a list of posts.
     */
    getMore() {
        throw 'Not implemented';
    }
    
    /**
     * Fetch the url and parse the result as JSON if the call succeeds.
     * Rejects with the response if the call fails (i.e error code >= 300)
     * @param  {string} url  The url to fetch.
     * @return {Promise}     The result of the fetch
     */
    getJson(url) {
        return fetch(url)
            .then(this.checkStatus)
            .then(this.toJson);
    }

    /**
     * Resolve or reject the response depending on the status code.
     * @param  {Response} response A response from the fetch api.
     * @return {Promise}           Resolved or rejected reponse.
     */
    checkStatus(response) {
        if (200 <= response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }

    /**
     * Return the JSON representation of the reponse.
     * @param  {Reponse} response A response from the fetch api.
     * @return {Object}           A JSON representation of the reponse.
     */
    toJson(response) {
        return response.json();
    }
}
