import React from 'react';

import AbstractViewer from './abstract';

const emptyTitle = '(╯°□°)╯︵ ┻━┻';

class EmptyViewer extends AbstractViewer {
    renderContent() {
        return '┬─┬﻿ ノ( ゜-゜ノ)';
    }
}

/**
 * Singleton empty viewer object
 */
const emptyViewer = <EmptyViewer title={emptyTitle}/>;
export default emptyViewer;