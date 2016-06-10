import React from 'react';
import Container from 'muicss/lib/react/container';

import PostList from './post-list';
import PostViewer, {RENDER_MODES} from './post-viewer';
import PostFeed from '../apis/post-feed';

class PostBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            badFeed: false,
            hasMore: true,
            posts: [],
            selectedPostIndex: 0,
            selectedPostRenderMode: RENDER_MODES.iframe
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
        this.getPostListClass = this.getPostListClass.bind(this);
        this.getPostListProps = this.getPostListProps.bind(this);
        this.getPostViewerClass = this.getPostViewerClass.bind(this);
        this.getPostViewerProps = this.getPostViewerProps.bind(this);
        this.postSelectionChanged = this.postSelectionChanged.bind(this);

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
        const PostListClass = this.getPostListClass();
        return <PostListClass {...this.getPostListProps()}/>;
    }

    renderPostViewer() {
        const PostViewerClass = this.getPostViewerClass();
        return <PostViewerClass {...this.getPostViewerProps()}/>;
    }

    initializePosts() {
        const postFeed = this.props.postFeed;

        if (postFeed.hasMore()) {
            postFeed.getMore().then(posts => {
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

    getPostListClass() {
        return PostList;
    }

    getPostListProps() {
        return {
            posts: this.state.posts,
            selectedPostIndex: this.state.selectedPostIndex,
            postSelectionChangedCallback: this.postSelectionChanged
        };
    }

    getPostViewerClass() {
        return PostViewer;
    }

    getPostViewerProps() {
        return {
            post: this.state.posts[this.state.selectedPostIndex],
            renderMode: this.state.selectedPostRenderMode
        };
    }

    postSelectionChanged(index, renderMode) {
        this.setState({
            selectedPostIndex: index,
            selectedPostRenderMode: renderMode
        });
    }
}

PostBrowser.propTypes = {
    postFeed: React.PropTypes.instanceOf(PostFeed).isRequired
};

export default PostBrowser;
