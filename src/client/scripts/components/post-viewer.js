import React from 'react';
import Panel from 'muicss/lib/react/panel';

class PostViewer extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <Panel className='postViewer'>
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

export default PostViewer;
