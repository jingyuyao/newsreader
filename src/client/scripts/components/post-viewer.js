import React from 'react';
import Panel from 'muicss/lib/react/panel';

import IframeView from './views/iframe-view';
import Post from '../models/post';

export const VIEW_CLASSES = {
    iframe: IframeView
};

export default class PostViewer extends React.Component {
    constructor(props) {
        super(props);

        this.renderView = this.renderView.bind(this);
        this.getContainerClass = this.getContainerClass.bind(this);
        this.getContainerProps = this.getContainerProps.bind(this);
    }

    render() {
        const post = this.props.post;
        const ContainerClass = this.getContainerClass();
        const containerProps = this.getContainerProps();
        const view = this.renderView();

        return (
            <ContainerClass {...containerProps}>
                <div className='mui--text-display1 title'>
                    {post.title}
                </div>
                {view}
            </ContainerClass>
        );
    }

    renderView() {
        const ViewClass = this.props.viewClass;
        return <ViewClass post={this.props.post} />;
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
    viewClass: React.PropTypes.oneOf(Object.keys(VIEW_CLASSES).map(key => VIEW_CLASSES[key])).isRequired
};
