import React from 'react';
import Panel from 'muicss/lib/react/panel';

import {Post} from '../models/post';

import IframeViewer from './viewers/iframe';
import ImageViewer from './viewers/image';

export default class PostListItem extends React.Component {
    static propTypes = {
        post: React.PropTypes.instanceOf(Post).isRequired,
        changeViewerTo: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.viewIn = this.viewIn.bind(this);
        this.viewInIframe = this.viewInIframe.bind(this);
        this.viewInImage = this.viewInImage.bind(this);

        this.viewFnMap = this.setUpViewFnMap();
    }

    render() {
        return (
            <Panel className='postListItem'>
                <div className='contents'>
                    <a className='title' onClick={this.getDefaultViewFn()}>
                        {this.props.post.title}
                    </a>
                    { do {
                        if (this.props.post.secondaryText) {
                            <span>{this.props.post.secondaryText}</span>;
                        }
                    }}
                </div>
            </Panel>
        );
    }

    /**
     * Sets up the map between a view of a post to its handler function.
     */
    setUpViewFnMap() {
        const map = new Map();

        map.set(Post.VIEWS.IFRAME, this.viewInIframe);
        map.set(Post.VIEWS.IMAGE, this.viewInImage);

        return map;
    }

    /**
     * Get the handler for the default view.
     * @return {Function} The handler to call for the default view
     */
    getDefaultViewFn() {
        return this.viewFnMap.get(this.props.post.primaryView);
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

    viewInImage() {
        this.viewIn(
            <ImageViewer
                title={this.props.post.title}
                url={this.props.post.imageUrl}
            />
        );
    }
}
