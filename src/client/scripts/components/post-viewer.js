import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostViewer extends React.Component {
    constructor(props) {
        super(props);

        this.renderViewerContents = this.renderViewerContents.bind(this);
    }

    render() {
        const post = this.props.post;
        const title = (
            <div className='mui--text-display1 title'>
                {post.title}
            </div>
        );
        const url = (
            <span className='url'>
                {post.url}
            </span>
        );
        return this.renderViewerContents(title, url);
    }

    renderViewerContents(...contents) {
        return (
            <Panel className='postViewer'>
                {contents}
            </Panel>
        );
    }
}

PostViewer.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired
};

export default PostViewer;
