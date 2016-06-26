/*
 * An API is a collection of feeds.
 */
export default class AbstractApi {
    /*
     * Return the default feed for a given news API
     */
    defaultFeed() {
        throw 'Not implemented';
    }
}
