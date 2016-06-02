import React from 'react';
import Container from 'muicss/lib/react/container';

import PostList from './post-list';
import PostViewer from './post-viewer';
import PostFeed from '../apis/post-feed';

class PostBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            badFeed: false,
            hasMore: true,
            posts: [],
            selectedIndex: 0
        };

        // context binding
        this.renderPostBrowser = this.renderPostBrowser.bind(this);
        this.renderBadFeed = this.renderBadFeed.bind(this);
        this.renderInitialLoading = this.renderInitialLoading.bind(this);
        this.renderPostList = this.renderPostList.bind(this);
        this.renderPostViewer = this.renderPostViewer.bind(this);
        this.initializePosts = this.initializePosts.bind(this);
        this.hasBadFeed = this.hasBadFeed.bind(this);
        this.hasPosts = this.hasPosts.bind(this);
        this.getPostListProps = this.getPostListProps.bind(this);
        this.getPostViewerProps = this.getPostViewerProps.bind(this);
        this.newSelectedIndex = this.newSelectedIndex.bind(this);

        this.initializePosts();
    }

    render() {
        if (this.hasPosts()) {
            return this.renderPostBrowser();
        }
        else if (this.hasBadFeed()) {
            return this.renderBadFeed();
        }
        else {
            return this.renderInitialLoading();
        }
    }

    renderPostBrowser() {
        return (
            <Container fluid={true} className='postBrowser'>
                {this.renderPostList()}
                {this.renderPostViewer()}
            </Container>
        );
    }

    renderBadFeed() {
        return <div>The feed is bad and you should feel bad.</div>;
    }

    renderInitialLoading() {
        return <div>Loading...</div>;
    }

    renderPostList() {
        const PostListClass = this.constructor.getPostListClass();
        return <PostListClass {...this.getPostListProps()}/>;
    }

    renderPostViewer() {
        const PostViewerClass = this.constructor.getPostViewerClass();
        return <PostViewerClass {...this.getPostViewerProps()}/>;
    }

    initializePosts() {
        const postFeed = this.props.postFeed;

        if (postFeed.hasMore()) {
            postFeed.getMore().then((posts) => {
                this.setState({posts: posts});
            });
        }
        else {
            this.setState({
                badFeed: true,
                hasMore: false
            });
        }
    }

    hasBadFeed() {
        return this.state.badFeed;
    }

    hasPosts() {
        return this.state.posts.length;
    }

    getPostListProps() {
        return {
            posts: this.state.posts,
            selectedIndex: this.state.selectedIndex,
            newSelectedIndex: this.newSelectedIndex
        };
    }

    getPostViewerProps() {
        return {
            post: this.state.posts[this.state.selectedIndex]
        };
    }

    newSelectedIndex(index) {
        this.setState({selectedIndex: index});
    }

    static getPostListClass() {
        return PostList;
    }

    static getPostViewerClass() {
        return PostViewer;
    }
}

PostBrowser.propTypes = {
    postFeed: React.PropTypes.instanceOf(PostFeed).isRequired
};

export default PostBrowser;
