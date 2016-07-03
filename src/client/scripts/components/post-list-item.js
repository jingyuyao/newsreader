import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

import IframeViewer from './viewers/iframe';

export default class PostListItem extends React.Component {
    static propTypes = {
        post: React.PropTypes.instanceOf(Post).isRequired,
        changeViewerTo: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.viewInIframe = this.viewInIframe.bind(this);
    }

    render() {
        const post = this.props.post;

        return (
            <Panel className='postListItem'>
                <div className='contents'>
                    <a className='title' onClick={this.viewInIframe}>
                        {post.title}
                    </a>
                    <span className='url'>
                        {post.url}
                    </span>
                </div>
            </Panel>
        );
    }

    viewInIframe() {
        const post = this.props.post;
        const iframeViewer = <IframeViewer title={post.title} url={post.url}/>;

        this.props.changeViewerTo(iframeViewer);
    }
}
