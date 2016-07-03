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

        this.viewIn = this.viewIn.bind(this);
        this.viewInIframe = this.viewInIframe.bind(this);
    }

    render() {
        return (
            <Panel className='postListItem'>
                <div className='contents'>
                    <a className='title' onClick={this.viewInIframe}>
                        {this.props.post.title}
                    </a>
                    <span className='url'>
                        {this.props.post.url}
                    </span>
                </div>
            </Panel>
        );
    }

    viewIn(component) {
        this.props.changeViewerTo(component);
    }

    viewInIframe() {
        this.viewIn(
            <IframeViewer
                title={this.props.post.title}
                url={this.props.post.url}
            />
        );
    }
}
