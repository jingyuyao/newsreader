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
            viewModel.posts posts

        domReady ->
            ko.applyBindings viewModel
