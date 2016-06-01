import Post from '../post';

class RedditPost extends Post {
    constructor(_data) {
        super(_data.id, _data.title, _data.url);
        // TODO: Extract more data here
        this.data = _data;
    }
}

export default RedditPost;
