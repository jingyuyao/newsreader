import React from 'react';

import AbstractViewer from './abstract';

export default class ImageViewer extends AbstractViewer {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    }

    renderContent() {
        // TODO: handle bad url
        // TODO: change div into an anchor?
        // Image containment technique: http://stackoverflow.com/a/18606996
        const backgroundImageStyle = {
            backgroundImage: `url(${this.props.url})`
        };
        return <div className='imageView' style={backgroundImageStyle}/>;
    }
}
