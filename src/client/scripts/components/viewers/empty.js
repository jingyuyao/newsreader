import React from 'react';

import AbstractViewer from './abstract';

export class EmptyViewer extends AbstractViewer {
    renderContent() {
        return <div className='content'>(╯°□°）╯︵ ┻━┻</div>;
    }
}

/**
 * Singleton empty viewer object
 */
const emptyViewer = <EmptyViewer title='Please select a post'/>;
export default emptyViewer;