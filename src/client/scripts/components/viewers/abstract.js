import React from 'react';
import Panel from 'muicss/lib/react/panel';

/**
 * Provides skeletons for all post viewers.
 */
export default class AbstractViewer extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }

    render() {
        return (
            <Panel className='postViewer'>
                <h1 className='title'>{this.props.title}</h1>
                <div className='content'>
                    {this.renderContent()}
                </div>
            </Panel>
        );
    }

    /**
     * Renders the content of the view as a node.
     * @return {React.Node} [description]
     */
    renderContent() {
        throw 'Not implemented';
    }
}
