import {getJson} from '../utils/fetch';
import {Post, PostBuilder} from '../models/post';

import AbstractFeed from './abstract';

export default class RedditFeed extends AbstractFeed {
    constructor(baseUri) {
        super();

        this.baseUri = baseUri;
        // Setting to undefined prevents the param from showing up on first load.
        this.after = undefined;
    }

    /**
     * Override
     */
    hasMore() {
        // TODO: heh
        return true;
    }

    /**
     * Override
     */
    getMore() {
        return getJson(this.getUrl())
            // Be careful about `this` not passing down into the handler
            .then(this.handleResponse.bind(this))
            .catch(() => []);
    }

    /**
     * Handle the reponse from Reddit
     * @param  {JsonResponse} response JSON reponse from Reddit's list api
     * @return {List}          A list of Post
     */
    handleResponse(response) {
        this.after = response.data.after;
        return RedditPostCreater.createPosts(response.data.children);
    }

    /**
     * Get the url for the current page of posts
     * @return {string} An url string
     */
    getUrl() {
        return this.baseUri.query({after: this.after}).toString();
    }
}

/**
 * Analyzes a thing and create a post from it
 */
class RedditPostCreater {
    // The list of post creater functions we have for Reddit. Functions should
    // return null if it cannot create a post from the thing. The first post returned
    // from these functions will be used as the post for that thing. At least one post
    // must be returned by these functioins.
    static postCreaters = [
        /**
         * Attempts to create an image post based on a list of known domains that
         * serves direct images.
         * @param  {Thing} thing A Reddit thing
         * @return {Post}        A Post if domain matches else null
         */
        thing => {
            // TODO: match only image formats e.g. jpg, png...
            const domain = /i.imgur.com/;
            const data = thing.data;

            if (data && data.domain && data.domain.match(domain)) {
                return new PostBuilder(data.id, data.title, Post.VIEWS.IMAGE)
                    .image(data.url)
                    .secondaryText(data.url)
                    .build();
            }

            return null;
        },
        /**
         * Default post to create when none of the custom post creations work.
         * TODO: iframe is to risky, change default to open in new tab.
         * @param  {Thing} thing A Reddit thing
         * @return {Post}        The default iframe post pointing to the url.
         */
        thing => {
            const data = thing.data;

            return new PostBuilder(data.id, data.title, Post.VIEWS.IFRAME)
                .iframe(data.url)
                .secondaryText(data.url)
                .build();
        },
    ];

    /**
     * Create a list of Post from a list of things
     * @param  {List} things A list of Reddit things
     * @return {List}        A list of Post
     */
    static createPosts(things) {
        return things.map(RedditPostCreater.createPost);
    }

    /**
     * Create a post from a thing by going through all the creaters.
     * @param  {Thing} thing A Reddit thing
     * @return {Post}        The Post this thing maps to
     */
    static createPost(thing) {
        for (let createPost of RedditPostCreater.postCreaters) {
            const post = createPost(thing);
            if (post !== null) {
                return post;
            }
        }
    }
}