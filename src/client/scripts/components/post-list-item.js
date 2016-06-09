import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.getContainerClass = this.getContainerClass.bind(this);
        this.getContainerProps = this.getContainerProps.bind(this);
        this.postClicked = this.postClicked.bind(this);
    }

    render() {
        const ContainerClass = this.getContainerClass();
        const containerProps = this.getContainerProps();
        const post = this.props.post;

        return (
            <ContainerClass {...containerProps}>
                <div className='mui--text-title title'>
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
            className: 'postListItem',
            onClick: this.postClicked
        };
    }

    postClicked(event) {
        this.props.postClicked(event, this.props.index);
    }
}

PostListItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    post: React.PropTypes.instanceOf(Post).isRequired,
    postClicked: React.PropTypes.func.isRequired
};

export default PostListItem;
