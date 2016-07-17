import URI from 'urijs';

import RedditFeed, {RedditPostCreater} from '../reddit';

// must be imported after fetch
import fetchMock from 'fetch-mock';

describe('RedditFeed', () => {
    const testUrl = 'https://www.reddit.com/.json';
    const testUri = URI(testUrl);
    let feed;

    beforeEach(() => {
        feed = new RedditFeed(testUri);
    });

    afterEach(fetchMock.restore);

    it('getMore should work', (done) => {
        fetchMock.mock(testUrl, {
            kind: 'Listing',
            data: {
                modhash: 'somerandomassstring',
                before: null,
                after: 't3_id',
                children: [
                    {
                        kind: 't3',
                        data: {
                            id: 'snowflake',
                            domain: 'jingyuyao.com',
                            title: 'im the best',
                            url: 'www.jingyuyao.com'
                        }
                    }
                ]
            }
        });

        spyOn(feed, 'handleResponse').and.callThrough();

        expect(feed.getUrl()).toEqual(testUrl);

        feed.getMore().then(posts => {
            expect(fetchMock.called(testUrl)).toBe(true);
            expect(feed.handleResponse).toHaveBeenCalled();
            expect(posts.length).toEqual(1);
            expect(feed.after).toEqual('t3_id');
            expect(feed.getUrl()).toEqual(testUri.query({after: 't3_id'}).toString());
            done();
        }).catch(done.fail);
    });
});