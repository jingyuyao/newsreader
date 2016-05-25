import React from 'react';

import PostList from './PostList';
import PostDetail from './PostDetail';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            posts: []
        };

        // Need to bind this context for none built-in functions
        this.selectedChangedTo = this.selectedChangedTo.bind(this);

        this.props.api.frontPage().then((posts) => {
            this.setState({posts: posts});
        });
    }

    render() {
        const selectedPost = this.state.posts[this.state.selectedIndex] || {};

        return (
            <div className='main-view'>
                <div className='header'>
                    <h1>Title</h1>
                </div>
                <div className='content'>
                    <PostList
                        posts={this.state.posts}
                        selectedIndex={this.state.selectedIndex}
                        selectedChangedTo={this.selectedChangedTo}
                    />
                    <PostDetail
                        post={selectedPost}
                    />
                </div>
                <div className='footer'>
                    <h1>Footer</h1>
                </div>
            </div>
        );
    }

    selectedChangedTo (index) {
        this.setState({selectedIndex: index});
    }
}

export default MainView;
