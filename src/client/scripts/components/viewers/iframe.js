import React from 'react';

import AbstractViewer from './abstract';

export default class IframeViewer extends AbstractViewer {
    renderContent() {
        // TODO: What happens when X-Frame-Options blocks the request?
        return <iframe className='iframeView' src={this.props.post.url} />;
    }

    getContainerCssClassName() {
        return super.getContainerCssClassName() + ' iframeViewer';
    }
}
