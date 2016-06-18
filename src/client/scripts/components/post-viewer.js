import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';

import Post from '../models/post';

export const RENDER_MODES = {
    iframe: 'iframe'
};

export default class PostViewer extends React.Component {
    constructor(props) {
        super(props);

        this.renderViewer = this.renderViewer.bind(this);
        this.renderIframeViewer = this.renderIframeViewer.bind(this);
        this.getContainerClass = this.getContainerClass.bind(this);
        this.getContainerProps = this.getContainerProps.bind(this);
    }

    render() {
        const post = this.props.post;
        const ContainerClass = this.getContainerClass();
        const containerProps = this.getContainerProps();
        const viewer = this.renderViewer();

        return (
            <ContainerClass {...containerProps}>
                <div className='mui--text-display1 title'>
                    {post.title}
                </div>
                <Divider/>
                {viewer}
            </ContainerClass>
        );
    }

    renderViewer() {
        const renderMode = this.props.renderMode;

        if (renderMode == RENDER_MODES.iframe) {
            return this.renderIframeViewer();
        }
    }

    renderIframeViewer() {
        return <iframe className='iframeView' src={this.props.post.url} />;
    }

    getContainerClass() {
        return Panel;
    }

    getContainerProps() {
        return {
            className: 'postViewer'
        };
    }
}

PostViewer.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired,
    renderMode: React.PropTypes.oneOf(Object.keys(RENDER_MODES).map(key => RENDER_MODES[key])).isRequired
};
