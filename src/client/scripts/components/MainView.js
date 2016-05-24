import React from 'react';

import PostList from './PostList.js';
import PostDetail from './PostDetail.js';

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
                    hi
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
                    lo
                </div>
            </div>
        );
    }

    selectedChangedTo (index) {
        this.setState({selectedIndex: index});
    }
}

export default MainView;
