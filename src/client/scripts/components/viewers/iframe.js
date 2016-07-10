import React from 'react';

import AbstractViewer from './abstract';

export default class IframeViewer extends AbstractViewer {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    }

    renderContent() {
        // TODO: handle X-Frame-Options and sanitize url
        return <iframe className='iframeView' src={this.props.url}/>;
    }
}
