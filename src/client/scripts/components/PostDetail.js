import React from 'react';

class PostDetail extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <div className='post-detail'>
                <span className='title'>
                    {post.title}
                </span>
                <span className='url'>
                    {post.url}
                </span>
            </div>
        );
    }
}

export default PostDetail;
