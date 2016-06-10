import React from 'react';

import PostListItem from './post-list-item';
import Post from '../models/post';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.renderPostListItem = this.renderPostListItem.bind(this);
        this.getPostListItemClass = this.getPostListItemClass.bind(this);
        this.getPostListItemProps = this.getPostListItemProps.bind(this);
        this.selectedIndexChanged = this.selectedIndexChanged.bind(this);
    }

    render() {
        const postListItems = this.props.posts.map(this.renderPostListItem);
        
        return (
            <div className='postList'>
                {postListItems}
            </div>
        );
    }

    renderPostListItem(post, index) {
        const PostListItemClass = this.getPostListItemClass();
        const postListItemProps = this.getPostListItemProps(post, index);

        return <PostListItemClass {...postListItemProps} />;
    }

    getPostListItemClass() {
        return PostListItem;
    }

    getPostListItemProps(post, index) {
        return {
            post: post,
            key: post.id,
            index: index,
            selectedCallback: this.selectedIndexChanged
        };
    }

    selectedIndexChanged(index) {
        if (index != this.props.selectedIndex) {
            this.props.newSelectedIndexCallback(index);
        }
    }
}

PostList.propTypes = {
    selectedIndex: React.PropTypes.number.isRequired,
    posts: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Post)).isRequired,
    newSelectedIndexCallback: React.PropTypes.func.isRequired
};

export default PostList;
