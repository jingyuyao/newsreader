import React from 'react';
import Container from 'muicss/lib/react/container';

import PostList from './post-list';
import PostViewer from './post-viewer';
import PostFeed from '../apis/post-feed';

class PostBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            posts: []
        };

        // context binding
        this.newSelectedIndex = this.newSelectedIndex.bind(this);

        const postFeed = this.props.postFeed;
        if (postFeed.hasMore()) {
            postFeed.getMore().then((posts) => {
                this.setState({posts: posts});
            });
        }
    }

    render() {
        if (!this.state.posts.length) {
            return (
                <div>Loading...</div>
            );
        }

        const selectedPost = this.state.posts[this.state.selectedIndex];

        return (
            <Container fluid={true} className='postBrowser'>
                <PostList
                    posts={this.state.posts}
                    selectedIndex={this.state.selectedIndex}
                    newSelectedIndex={this.newSelectedIndex}
                />
                <PostViewer
                    post={selectedPost}
                />
            </Container>
        );
    }

    newSelectedIndex(index) {
        this.setState({selectedIndex: index});
    }
}

PostBrowser.propTypes = {
    postFeed: React.PropTypes.instanceOf(PostFeed).isRequired
};

export default PostBrowser;
