import React from 'react';
import Panel from 'muicss/lib/react/panel';

class PostViewer extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <Panel className='postViewer'>
                <div className='mui--text-display1 title'>
                    {post.title}
                </div>
                <span className='url'>
                    {post.url}
                </span>
            </Panel>
        );
    }
}

export default PostViewer;
