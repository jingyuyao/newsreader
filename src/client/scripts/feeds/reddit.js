import URI from 'urijs';

import {getJson} from '../utils/fetch';
import {Post, PostBuilder} from '../models/post';

import AbstractFeed from './abstract';

export default class RedditFeed extends AbstractFeed {
    /**
     * Creates a feed for Reddit with a given base URI.
     * @param  {URI} baseUri The URI this feed get its post from
     */
    constructor(baseUri) {
        super();

        this.postCreater = new RedditPostCreater();
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
            .then(response => this.handleResponse(response))
            .catch(() => []);
    }

    /**
     * Handle the reponse from Reddit
     * @param  {JsonResponse} response JSON reponse from Reddit's list api
     * @return {List}          A list of Post
     */
    handleResponse(response) {
        this.after = response.data.after;
        return this.postCreater.createPosts(response.data.children);
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
export class RedditPostCreater {
    constructor() {
        // The list of post creater functions we have for Reddit. Functions should
        // return null if it cannot create a post from the thing. The first post returned
        // from these functions will be used as the post for that thing. At least one post
        // must be returned by these functioins.
        this.postCreaters = [
            this.createImagePost.bind(this),
            this.createDefaultPost.bind(this),
        ];
    }

    /**
     * Create a list of Post from a list of things
     * @param  {List} things A list of Reddit things
     * @return {List}        A list of Post
     */
    createPosts(things) {
        // Avoids having to call `.bind`
        return things.map(thing => this.createPost(thing));
    }

    /**
     * Create a post from a thing by going through all the creaters.
     * @param  {Thing} thing A Reddit thing
     * @return {Post}        The Post this thing maps to
     */
    createPost(thing) {
        for (let createPostFn of this.postCreaters) {
            const post = createPostFn(thing);
            if (post !== null) {
                return post;
            }
        }
    }

    /**
     * Default post to create when none of the custom post creations work.
     * TODO: iframe is to risky, change default to open in new tab.
     * @param  {Thing} thing A Reddit thing
     * @return {Post}        The default iframe post pointing to the url.
     */
    createDefaultPost(thing) {
        const data = thing.data;
        return new PostBuilder(data.id, data.title, Post.VIEWS.IFRAME)
            .iframe(data.url)
            .secondaryText(data.url)
            .build();
    }

    /**
     * Attempts to create an image post
     * @param  {Thing} thing A Reddit thing
     * @return {Post}        A Post if possible
     */
    createImagePost(thing) {
        if (this.isRawImagePost(thing)) {
            const data = thing.data;
            return new PostBuilder(data.id, data.title, Post.VIEWS.IMAGE)
                .image(data.url)
                .secondaryText(data.url)
                .build();
        }

        return null;
    }

    /**
     * Checks whether a thing is a raw image post.
     * @param  {Thing}  thing A Reddit thing
     * @return {Boolean}       Whether this post is an image
     */
    isRawImagePost(thing) {
        const data = thing.data;
        if (!data && !data.url) {
            return false;
        }

        const url = URI(data.url);
        const domain = url.domain();
        const subdomain = url.subdomain();
        const suffix = url.suffix();

        // TODO: is this complete?
        const imageSuffixes = ['jpg', 'png', 'gif'];
        const containsSuffix = imageSuffixes.indexOf(suffix) > -1;

        // i.imgur.com rule
        if (containsSuffix && subdomain === 'i' && domain === 'imgur.com') {
            return true;
        }

        // i.redd.it rule
        if (containsSuffix && subdomain === 'i' && domain === 'redd.it') {
            return true;
        }
    }
}
