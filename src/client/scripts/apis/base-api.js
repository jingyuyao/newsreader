/*
 * An API is a collection of PostFeeds.
 */
class BaseApi {
    /*
     * Return the default PostFeed for a given news API
     */
    defaultFeed() {
        throw "Not implemented";
    }
}

export default BaseApi;
