import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostViewer extends React.Component {
    constructor(props) {
        super(props);

        this.getContainerClass = this.getContainerClass.bind(this);
        this.getContainerProps = this.getContainerProps.bind(this);
    }

    render() {
        const ContainerClass = this.getContainerClass();
        const containerProps = this.getContainerProps();
        const post = this.props.post;

        return (
            <ContainerClass {...containerProps}>
                <div className='mui--text-display1 title'>
                    {post.title}
                </div>
                <span className='url'>
                    {post.url}
                </span>
            </ContainerClass>
        );
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
    post: React.PropTypes.instanceOf(Post).isRequired
};

export default PostViewer;
