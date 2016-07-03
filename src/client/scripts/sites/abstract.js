/*
 * Contains site level logic like picking the right API and feed.
 */
export default class AbstractSite {
    /**
     * Create an site with the given api.
     * @param  {AbstractApi} api An instance of AbstractApi
     */
    constructor(api) {
        this.api = api;
    }

    getCurrentFeed() {
        throw 'Not implemented';
    }
}
