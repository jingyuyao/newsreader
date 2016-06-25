/* global describe, it, beforeEach, expect */

import 'whatwg-fetch';

import PostFeed from '../post-feed';

describe('PostFeed', () => {
    let feed;

    beforeEach(() => {
        feed = new PostFeed();
    });

    it('should not implement pagination functions', () => {
        expect(feed.hasMore).toThrow();
        expect(feed.getMore).toThrow();
    });

    describe('Utilities', () => {
        it('checkStatus should handle good response', () => {
            const goodResponse = new Response(undefined, {
                status: 200
            });

            expect(feed.checkStatus(goodResponse)).toEqual(goodResponse);
        });

        it('checkStatus should handle bad response', () => {
            const badResponse = new Response(undefined, {
                status: 401
            });

            expect(() => feed.checkStatus(badResponse)).toThrow();
        });
    });
});