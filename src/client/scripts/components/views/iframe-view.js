import React from 'react';
import Post from '../../models/post';

export default class IframeView extends React.Component {
    render() {
        // TODO: What happens when X-Frame-Options blocks the request?
        return <iframe className='iframeView' src={this.props.post.url} />;
    }
}

IframeView.propTypes = {
    post: React.PropTypes.instanceOf(Post).isRequired
};