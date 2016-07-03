import React from 'react';
import Container from 'muicss/lib/react/container';

import AbstractFeed from '../feeds/abstract';

import emptyViewer from './viewers/empty';
import PostList from './post-list';

export default class FeedBrowser extends React.Component {
    static propTypes = {
        feed: React.PropTypes.instanceOf(AbstractFeed).isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            viewer: emptyViewer
        };

        this.changeViewerTo = this.changeViewerTo.bind(this);

        this.loadMorePosts();
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

    renderFeedBrowser() {
        return (
            <Container className='feedBrowser' fluid={true}>
                <PostList
                    posts={this.state.posts}
                    changeViewerTo={this.changeViewerTo}
                />
                {this.state.viewer}
            </Container>
        );
    }

    renderInitialLoading() {
        return <div>Loading...</div>;
    }

    renderEmptyFeed() {
        return <div>The feed is empty.</div>;
    }

    /**
     * Attempts to load more posts from the feed.
     */
    loadMorePosts() {
        const feed = this.props.feed;

        if (feed.hasMore()) {
            feed.getMore().then(posts => {
                this.setState({
                    // TODO: deduplication
                    posts: this.state.posts.concat(posts)
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
