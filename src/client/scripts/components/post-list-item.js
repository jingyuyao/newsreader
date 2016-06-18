import React from 'react';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

import {RENDER_MODES} from './post-viewer';
import Post from '../models/post';

export default class PostListItem extends React.Component {
    constructor(props) {
        super(props);

        this.getContainerClass = this.getContainerClass.bind(this);
        this.getContainerProps = this.getContainerProps.bind(this);
        this.viewInIframe = this.viewInIframe.bind(this);
    }

    render() {
        const ContainerClass = this.getContainerClass();
        const containerProps = this.getContainerProps();
        const post = this.props.post;

        return (
            <ContainerClass {...containerProps}>
                <div className='contents'>
                    <a className='title' onClick={this.viewInIframe}>
                        {post.title}
                    </a>
                </div>
                <div className='buttons'>
                    <Button variant='flat' className='iconButton'>
                        <i className='material-icons'>comment</i>
                    </Button>
                </div>
            </ContainerClass>
        );
    }

    getContainerClass() {
        return Panel;
    }

    getContainerProps() {
        return {
            className: 'postListItem'
        };
    }

    viewInIframe() {
        this.props.selectedCallback(this.props.index, RENDER_MODES.iframe);
    }
}

PostListItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    post: React.PropTypes.instanceOf(Post).isRequired,
    selectedCallback: React.PropTypes.func.isRequired
};
