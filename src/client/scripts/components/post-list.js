import React from 'react';

import Post from '../models/post';

import PostListItem from './post-list-item';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const postListItems = this.props.posts.map(post => {
            return (
                <PostListItem
                    key={post.id}
                    post={post}
                    changeViewerTo={this.props.changeViewerTo}
                />
            );
        });

        return (
            <div className='postList'>
                {postListItems}
            </div>
        );
    }
}

PostList.propTypes = {
    posts: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Post)).isRequired,
    changeViewerTo: React.PropTypes.func.isRequired
};
