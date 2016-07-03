import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../../models/post';

/**
 * Provides skeletons for all post viewers.
 */
export default class AbstractViewer extends React.Component {
    constructor(props) {
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    render() {
        return (
            <Panel className={this.getContainerCssClassName()}>
                {this.renderHeader()}
                {this.renderContent()}
            </Panel>
        );
    }

    renderHeader() {
        return (
            <div className='mui--text-display1 title'>
                {this.props.post.title}
            </div>
        );
    }

    renderContent() {
        throw 'Not implemented';
    }

    getContainerCssClassName() {
        return 'abstractViewer';
    }
}

AbstractViewer.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired
};
