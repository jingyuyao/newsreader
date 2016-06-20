import React from 'react';
import Container from 'muicss/lib/react/container';

import PostFeed from '../apis/post-feed';

import EmptyViewer from './viewers/empty';
import PostList from './post-list';

export default class FeedBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            viewer: <EmptyViewer />
        };

        // context bindings
        this.renderInitialLoading = this.renderInitialLoading.bind(this);
        this.renderEmptyFeed = this.renderEmptyFeed.bind(this);
        this.renderFeedBrowser = this.renderFeedBrowser.bind(this);
        this.renderPostList = this.renderPostList.bind(this);

        this.initializePosts = this.initializePosts.bind(this);
        this.changeViewerTo = this.changeViewerTo.bind(this);

        this.initializePosts();
    }

    render() {
        if (this.state.posts.length > 0) {
            return this.renderFeedBrowser();
        } else if (this.props.postFeed.hasMore()) {
            return this.renderInitialLoading();
        } else {
            return this.renderEmptyFeed();
        }
    }

    renderInitialLoading() {
        return <div>Loading...</div>;
    }

    renderEmptyFeed() {
        return <div>The feed is empty.</div>;
    }

    renderFeedBrowser() {
        return (
            <Container className='feedBrowser' fluid={true}>
                {this.renderPostList()}
                {this.state.viewer}
            </Container>
        );
    }

    renderPostList() {
        return <PostList posts={this.state.posts} changeViewerTo={this.changeViewerTo}/>;
    }

    /**
     * Attempts to get the first batch of posts.
     */
    initializePosts() {
        const postFeed = this.props.postFeed;

        if (postFeed.hasMore()) {
            postFeed.getMore().then(posts => {
                this.setState({
                    posts: posts
                });
            });
        }
    }

    /**
     * Change the current post viewer.
     * @param  {BaseViewer} newViewer  New viewer to display
     */
    changeViewerTo(newViewer) {
        this.setState({
            viewer: newViewer
        });
    }
}

FeedBrowser.propTypes = {
    postFeed: React.PropTypes.instanceOf(PostFeed).isRequired
};
