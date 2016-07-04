import React from 'react';
import Panel from 'muicss/lib/react/panel';

import {Post} from '../models/post';

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
                    <a className='title' onClick={this.getDefaultViewFn()}>
                        {this.props.post.title}
                    </a>
                </div>
            </Panel>
        );
    }

    /**
     * Get the handler for the default view.
     * @return {Function} The handler to call for the default view
     */
    getDefaultViewFn() {
        const primaryView = this.props.post.primaryView;

        if (primaryView == Post.VIEWS.IFRAME) {
            return this.viewInIframe;
        }
    }

    /**
     * Fire the view changed handler to display the new view.
     * @param  {Element} component New react element as the view
     */
    viewIn(newViewer) {
        this.props.changeViewerTo(newViewer);
    }

    viewInIframe() {
        this.viewIn(
            <IframeViewer
                title={this.props.post.title}
                url={this.props.post.iframeUrl}
            />
        );
    }
}
