import React from 'react';
import Panel from 'muicss/lib/react/panel';

import Post from '../models/post';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.renderItemContents = this.renderItemContents.bind(this);
        this.postClicked = this.postClicked.bind(this);
    }

    render() {
        const post = this.props.post;
        const title = (
            <div className='mui--text-title title'>
                {post.title}
            </div>
        );
        const url = (
            <span className='url'>
                {post.url}
            </span>
        );

        return this.renderItemContents(title, url);
    }

    renderItemContents(...contents) {
        return (
            <Panel onClick={this.postClicked} className='postListItem'>
                {contents}
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
