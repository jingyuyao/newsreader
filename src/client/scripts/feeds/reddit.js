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
        return this.createPosts(response.data.children);
    }

    /**
     * Get the url for the current page of posts
     * @return {string} An url string
     */
    getUrl() {
        return this.baseUri.query({after: this.after}).toString();
    }

    /**
     * Create a list of Post from a list of things
     * @param  {List} things A list of Reddit things
     * @return {List}        A list of Post
     */
    createPosts(things) {
        return things.map(this.createPost);
    }

    /**
     * Create a post from a thing
     * @param  {Thing} thing A Reddit thing
     * @return {Post}        The Post this thing maps to
     */
    createPost(thing) {
        const data = thing.data;
        // TODO: change primary view depending on thing's kind
        // TODO: add secondary view by parsing the thing
        return new PostBuilder(data.id, data.title, Post.VIEWS.IFRAME)
            .iframe(data.url)
            .build();
    }
}
