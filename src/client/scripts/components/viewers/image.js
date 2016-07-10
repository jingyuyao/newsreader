import React from 'react';

import AbstractViewer from './abstract';

export default class ImageViewer extends AbstractViewer {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    }

    renderContent() {
        // TODO: handle bad url
        return (
            <div className='imageView'>
                <img src={this.props.url}/>
            </div>
        );
    }
}
