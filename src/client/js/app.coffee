requirejs.config
    baseUrl: 'js/lib'
    paths:
        api: '../api'
        component: '../component'

requirejs ['domReady', 'react-dom', 'api/Reddit', 'component/MainView'],
    (domReady, ReactDOM, Reddit, MainView) ->
        reddit = new Reddit()

        domReady ->
            container = document.getElementById 'container'
            # One thing to note here is that we do not have access
            # to the setState function until the component is rendered.
            # This means if we just do mainView = MainView() then mainView
            # will not have access to setStates
            mainView = ReactDOM.render MainView(), container
            reddit.frontPage().then (posts) ->
                mainView.setState
                    posts: posts

