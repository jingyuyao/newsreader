import SiteBase from './base';
import RedditApi from '../apis/reddit/api';
import RedditFeedBrowser from '../components/reddit/feed-browser';

export default class RedditSite extends SiteBase {
    getApi() {
        return new RedditApi();
    }

    getFeedBrowserClass() {
        return RedditFeedBrowser;
    }
}
