import React from 'react';
import Panel from 'muicss/lib/react/panel';

class PostDetail extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <Panel className='post-detail'>
                <h1 className='title'>
                    {post.title}
                </h1>
                <span className='url'>
                    {post.url}
                </span>
            </Panel>
        );
    }
}

export default PostDetail;
