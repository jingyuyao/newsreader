import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostViewer extends React.Component {
    constructor(props) {
        super(props);

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

    getContainerProps() {
        return {
            className: 'postViewer'
        };
    }

    getContainerClass() {
        return Panel;
    }
}

PostViewer.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired
};

export default PostViewer;
