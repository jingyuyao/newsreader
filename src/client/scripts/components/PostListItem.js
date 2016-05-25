import React from 'react';
import Panel from 'muicss/lib/react/panel';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const post = this.props.post;
        return (
            <Panel className='post-list-item'>
                <h4 className='title'>
                    {post.title}
                </h4>
                <span className='url'>
                    {post.url}
                </span>
            </Panel>
        );
    }

    onClick(event) {
        this.props.onClick(event, this.props.index);
    }
}

export default PostListItem;
