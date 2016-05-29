import React from 'react';

import PostListItem from './post-list-item';
import Post from '../models/post';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.postClicked = this.postClicked.bind(this);
    }

    render() {
        const items = this.props.posts.map((post, index) => {
            return (
                <PostListItem
                    post={post}
                    key={post.id}
                    index={index}
                    postClicked={this.postClicked}
                />
            );
        });
        
        return (
            <div className='postList'>
                {items}
            </div>
        );
    }

    postClicked(event, index) {
        if (index != this.props.selectedIndex) {
            this.props.newSelectedIndex(index);
        }
    }
}

PostList.propTypes = {
    selectedIndex: React.PropTypes.number.isRequired,
    posts: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Post)).isRequired,
    newSelectedIndex: React.PropTypes.func.isRequired
};

export default PostList;
