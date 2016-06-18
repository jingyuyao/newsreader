import Post from '../post';

export default class RedditPost extends Post {
    constructor(_data) {
        super(_data.id, _data.title, _data.url);
        // TODO: Extract more data here
        this.data = _data;
    }
}
