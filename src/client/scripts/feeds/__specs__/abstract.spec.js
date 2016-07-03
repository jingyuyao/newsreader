import AbstractFeed from '../abstract';

describe('AbstractFeed', () => {
    it('should not implement pagination functions', () => {
        const feed = new AbstractFeed();

        expect(feed.hasMore).toThrow();
        expect(feed.getMore).toThrow();
    });
});