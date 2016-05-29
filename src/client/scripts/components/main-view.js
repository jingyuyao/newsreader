import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import PostList from './post-list';
import PostViewer from './post-viewer';
import BaseApi from '../apis/base-api';
import Post from '../models/post';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            posts: []
        };

        // Need to bind this context for none built-in functions
        this.newSelectedIndex = this.newSelectedIndex.bind(this);

        this.props.api.frontPage().then((posts) => {
            this.setState({posts: posts});
        });
    }

    render() {
        const selectedPost = this.state.posts[this.state.selectedIndex] || this.props.emptyPost;

        return (
            <div className='mainView'>
                <Appbar className='appbar'>
                    <span className='mui--text-display1'>Title</span>
                </Appbar>
                <Container fluid={true} className='mainContainer'>
                    <PostList
                        posts={this.state.posts}
                        selectedIndex={this.state.selectedIndex}
                        newSelectedIndex={this.newSelectedIndex}
                    />
                    <PostViewer
                        post={selectedPost}
                    />
                </Container>
            </div>
        );
    }

    newSelectedIndex(index) {
        this.setState({selectedIndex: index});
    }
}

MainView.defaultProps = {
    emptyPost: new Post('emptyPost', 'Select a post...', 'http://www.example.org')
};

MainView.propTypes = {
    api: React.PropTypes.instanceOf(BaseApi).isRequired
};

export default MainView;
