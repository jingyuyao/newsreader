/*
 * A Post can be anything from a Reddit submission
 * to a new article to a Facebook spam. This class
 * is composed of the minimum number of properties
 * common to all posts. The class is mainly used
 * to validate props in React components.
 */
export default class Post {
    constructor(id, title, url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }
}
