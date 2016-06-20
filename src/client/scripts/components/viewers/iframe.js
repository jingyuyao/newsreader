import React from 'react';

import BaseViewer from './base';

export default class IframeViewer extends BaseViewer {
    renderContent() {
        // TODO: What happens when X-Frame-Options blocks the request?
        return <iframe className='iframeView' src={this.props.post.url} />;
    }

    getContainerCssClassName() {
        return super.getContainerCssClassName() + ' iframeViewer';
    }
}
