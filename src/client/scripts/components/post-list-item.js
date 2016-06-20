import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

import IframeViewer from './viewers/iframe';

export default class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.getContainerCssClassName = this.getContainerCssClassName.bind(this);
        this.viewInIframe = this.viewInIframe.bind(this);
    }

    render() {
        const post = this.props.post;

        return (
            <Panel className={this.getContainerCssClassName()}>
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

    getContainerCssClassName() {
        return 'postListItem';
    }

    viewInIframe() {
        const iframeViewer = <IframeViewer post={this.props.post}/>;

        this.props.changeViewerTo(iframeViewer);
    }
}

PostListItem.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired,
    changeViewerTo: React.PropTypes.func.isRequired
};
