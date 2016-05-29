import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

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

PostViewer.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired
};

export default PostViewer;
