import React from 'react';

import {Post} from '../models/post';

import PostListItem from './post-list-item';

export default class PostList extends React.Component {
    static propTypes = {
        posts: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Post)).isRequired,
        changeViewerTo: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div className='postList'>{
                this.props.posts.map(post => (
                    <PostListItem
                        key={post.id}
                        post={post}
                        changeViewerTo={this.props.changeViewerTo}
                    />
                ))
            }</div>
        );
    }
}
