requirejs.config
    baseUrl: 'js/lib'
    paths:
        api: '../api'
        models: '../models'

requirejs ['domReady', 'knockout', 'api/reddit', 'models/viewmodel'],
    (domReady, ko, Reddit, ViewModel) ->
        reddit = new Reddit()
        viewModel = new ViewModel()

        reddit.frontPage().then (posts) ->
            viewModel.loadPosts posts

        domReady ->
            ko.applyBindings viewModel
            setInterval ->
                viewModel.nextPost()
            , 1000
