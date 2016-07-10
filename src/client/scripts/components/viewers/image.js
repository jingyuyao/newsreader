import React from 'react';

import AbstractViewer from './abstract';

export default class ImageViewer extends AbstractViewer {
    static propTypes = Object.assign({
        url: React.PropTypes.string.isRequired
    }, AbstractViewer.propTypes)

    renderContent() {
        // TODO: handle bad url
        return <img className='imageView' src={this.props.url}/>;
    }
}
