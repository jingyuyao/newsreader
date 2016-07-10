/*
 * A Post can be anything from a Reddit submission
 * to a new article to a Facebook spam. This class
 * is composed of the minimum number of properties
 * common to all posts.
 */
export class Post {
    /**
     * The list of views a post can be viewed in
     */
    static VIEWS = Object.freeze({
        IFRAME: 0,
        IMAGE: 1,
    })

    constructor(id, title, primaryView) {
        this.id = id;
        this.title = title;
        this.primaryView = primaryView;
    }
}

export class PostBuilder {
    constructor(id, title, primaryView) {
        this.post = new Post(id, title, primaryView);
    }

    /**
     * Set the url for the iframe view of this post.
     * @param  {string} url     The absolute url for the iframe
     * @return {PostBuilder}    The builder instance
     */
    iframe(url) {
        this.post.iframeUrl = url;
        return this;
    }

    /**
     * Set the url for the image view of this post.
     * @param  {string} url     The absolute url for the image
     * @return {PostBuilder}    The builder instance
     */
    image(url) {
        this.post.imageUrl = url;
        return this;
    }

    /**
     * Set the secondary text to show for the post. This is usually
     * a short description
     * @param  {string} text The short description to show
     * @return {PostBuilder}      The builder instance
     */
    secondaryText(text) {
        this.post.secondaryText = text;
        return this;
    }

    /**
     * Returns the built post.
     * @return {Post} The built post.
     */
    build() {
        return this.post;
    }
}
