import React from 'react';

import Post from '../models/post';

import PostListItem from './post-list-item';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.renderPostListItem = this.renderPostListItem.bind(this);
        this.getPostListItemProps = this.getPostListItemProps.bind(this);
    }

    render() {
        const postListItems = this.props.posts.map(this.renderPostListItem);
        
        return (
            <div className='postList'>
                {postListItems}
            </div>
        );
    }

    renderPostListItem(post) {
        const postListItemProps = this.getPostListItemProps(post);

        return <PostListItem {...postListItemProps} />;
    }

    getPostListItemProps(post) {
        return {
            key: post.id,
            post: post,
            changeViewerTo: this.props.changeViewerTo
        };
    }
}

PostList.propTypes = {
    posts: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Post)).isRequired,
    changeViewerTo: React.PropTypes.func.isRequired
};
