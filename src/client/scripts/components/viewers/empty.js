import React from 'react';

import AbstractViewer from './abstract';

export default class EmptyViewer extends AbstractViewer {
    renderHeader() {
        return <div className='mui--text-display1 title'>Please select a post</div>;
    }

    renderContent() {
        return <div className='content'>(╯°□°）╯︵ ┻━┻</div>;
    }

    getContainerCssClassName() {
        return super.getContainerCssClassName() + ' emptyViewer';
    }
}

/**
 * EmptyViewer does not require any props.
 */
EmptyViewer.propTypes = {};