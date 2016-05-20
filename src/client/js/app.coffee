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
            mainView = MainView
                api: reddit

            ReactDOM.render mainView, container
