import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.postClicked = this.postClicked.bind(this);
    }

    render() {
        const post = this.props.post;
        return (
            <Panel onClick={this.postClicked} className='postListItem'>
                <div className='mui--text-title title'>
                    {post.title}
                </div>
                <span className='url'>
                    {post.url}
                </span>
            </Panel>
        );
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
