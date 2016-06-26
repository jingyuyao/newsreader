/* global describe, it, expect */

import PostFeed from '../post-feed';

describe('PostFeed', () => {
    it('should not implement pagination functions', () => {
        const feed = new PostFeed();

        expect(feed.hasMore).toThrow();
        expect(feed.getMore).toThrow();
    });
});