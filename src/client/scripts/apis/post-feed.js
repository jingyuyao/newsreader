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
}
