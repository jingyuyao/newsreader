import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

import RedditSite from './sites/reddit';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SiteClass: RedditSite
        };
    }

    render() {
        const SiteClass = this.state.SiteClass;
        return (
            <div className='app'>
                <Appbar className='appbar'>
                    <span className='mui--text-display1'>Title</span>
                </Appbar>
                <SiteClass />
            </div>
        );
    }
}

export default App;
