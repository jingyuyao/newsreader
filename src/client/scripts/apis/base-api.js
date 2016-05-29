/*
 * An API is a collection of PostFeeds.
 */
class BaseApi {
    /*
     * Return a PostFeed for the frontpage for the given news api
     */
    frontPage() {
        throw "Not implemented";
    }
}

export default BaseApi;
