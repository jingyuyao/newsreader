import React from 'react';

import PostListItem from './PostListItem';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const items = this.props.posts.map((post, i) => {
            return (
                <PostListItem
                    post={post}
                    key={post.id}
                    index={i}
                    onClick={this.handleClick}
                />
            );
        });
        
        return (
            <div className='post-list'>
                {items}
            </div>
        );
    }

    handleClick(event, i) {
        this.props.selectedChangedTo(i);
    }
}

export default PostList;
