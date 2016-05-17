define ['knockout'], (ko) ->
    class ViewModel
        constructor: ->
            @posts = ko.observableArray()
            @selectedPost = ko.observable()
