import SiteBase from './base';
import RedditApi from '../apis/reddit/api';
import RedditPostBrowser from '../components/reddit/post-browser';

export default class RedditSite extends SiteBase {
    getApi() {
        return new RedditApi();
    }

    getPostBrowserClass() {
        return RedditPostBrowser;
    }
}
