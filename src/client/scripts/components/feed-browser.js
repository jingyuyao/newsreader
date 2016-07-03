import React from 'react';
import Container from 'muicss/lib/react/container';

import AbstractFeed from '../feeds/abstract';

import EmptyViewer from './viewers/empty';
import PostList from './post-list';

export default class FeedBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            viewer: <EmptyViewer />
        };

        this.changeViewerTo = this.changeViewerTo.bind(this);

        this.initializePosts();
    }

    render() {
        if (this.state.posts.length > 0) {
            return this.renderFeedBrowser();
        } else if (this.props.feed.hasMore()) {
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
                <PostList posts={this.state.posts} changeViewerTo={this.changeViewerTo}/>
                {this.state.viewer}
            </Container>
        );
    }

    /**
     * Attempts to get the first batch of posts.
     */
    initializePosts() {
        const feed = this.props.feed;

        if (feed.hasMore()) {
            feed.getMore().then(posts => {
                this.setState({
                    posts: posts
                });
            });
        }
    }

    /**
     * Change the current post viewer.
     * @param  {AbstractViewer} newViewer  New viewer to display
     */
    changeViewerTo(newViewer) {
        this.setState({
            viewer: newViewer
        });
    }
}

FeedBrowser.propTypes = {
    feed: React.PropTypes.instanceOf(AbstractFeed).isRequired
};
