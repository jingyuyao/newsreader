requirejs.config
    baseUrl: 'js/lib'
    paths:
        api: '../api'

requirejs ['domReady', 'knockout', 'api/reddit'],
    (domReady, ko, Reddit) ->
        reddit = new Reddit()
        reddit.hi()

        domReady ->
            ko.applyBindings
                rows: [
                    {title: 'test1'}
                    {title: 'test2'}
                ]
                highlighted:
                    title: 'test1'
