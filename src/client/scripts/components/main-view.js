import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import PostList from './post-list';
import PostViewer from './post-viewer';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            posts: []
        };

        // Need to bind this context for none built-in functions
        this.selectedChangedTo = this.selectedChangedTo.bind(this);

        this.props.api.frontPage().then((posts) => {
            this.setState({posts: posts});
        });
    }

    render() {
        const selectedPost = this.state.posts[this.state.selectedIndex] || {};

        return (
            <div className='mainView'>
                <header>
                    <Appbar className='appbar'>
                        <span className='mui--text-display1'>Title</span>
                    </Appbar>
                </header>
                <main>
                    {/* Buffer for fixed header */}
                    <div className='mui--appbar-height'></div>
                    <Container fluid={true} className='mainContainer'>
                        <PostList
                            posts={this.state.posts}
                            selectedIndex={this.state.selectedIndex}
                            selectedChangedTo={this.selectedChangedTo}
                        />
                        <PostViewer
                            post={selectedPost}
                        />
                    </Container>
                </main>
                <footer>
                    <Container fluid={true} className='footerContainer'>
                        Hellooooooo
                    </Container>
                </footer>
            </div>
        );
    }

    selectedChangedTo (index) {
        this.setState({selectedIndex: index});
    }
}

export default MainView;
