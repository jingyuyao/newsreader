import React from 'react';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const post = this.props.post;
        return (
            <div className='post-list-item'>
                <span className='title'>
                    {post.title}
                </span>
                <span className='url'>
                    {post.url}
                </span>
            </div>
        );
    }

    onClick(event) {
        this.props.onClick(event, this.props.index);
    }
}

export default PostListItem;
