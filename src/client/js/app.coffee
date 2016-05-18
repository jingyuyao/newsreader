requirejs.config
    baseUrl: 'js/lib'
    paths:
        api: '../api'
        model: '../model'
        controller: '../controller'

requirejs ['domReady', 'knockout', 'api/Reddit', 'model/ViewModel', 'controller/CycleController'],
    (domReady, ko, Reddit, ViewModel, CycleController) ->
        reddit = new Reddit()
        viewModel = new ViewModel()
        cycleController = new CycleController viewModel

        reddit.frontPage().then viewModel.loadPosts

        domReady ->
            ko.applyBindings viewModel
            cycleController.start()
