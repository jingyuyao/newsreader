import React from 'react';

import AbstractViewer from './abstract';

export default class IframeViewer extends AbstractViewer {
    static propTypes = Object.assign({
        url: React.PropTypes.string.isRequired
    }, AbstractViewer.propTypes)

    renderContent() {
        // TODO: handle X-Frame-Options and sanitize url
        return <iframe className='iframeView' src={this.props.url} />;
    }
}
