/*
 * An API is a collection of PostFeeds.
 */
class ApiBase {
    /*
     * Return the default PostFeed for a given news API
     */
    defaultFeed() {
        throw "Not implemented";
    }
}

export default ApiBase;
