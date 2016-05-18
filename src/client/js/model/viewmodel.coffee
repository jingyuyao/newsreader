define ['knockout'], (ko) ->
    class ViewModel
        constructor: ->
            # Configs
            @rowsToShow = 5

            # Observables
            @allPosts = ko.observableArray()

            @currentPage = ko.observable 0

            # [inclusive...exclusive]
            @startPostIndexToDisplay = ko.pureComputed =>
                Math.min @allPosts().length, @currentPage() * @rowsToShow
            @endPostIndexToDisplay = ko.pureComputed =>
                Math.min @allPosts().length, @startPostIndexToDisplay() + @rowsToShow

            # Selected post index = @startPostIndexToDisplay + @selectedPostOffset
            @selectedPostOffset = ko.observable 0
            @selectedPostIndex = ko.pureComputed =>
                Math.min @allPosts().length, @startPostIndexToDisplay() + @selectedPostOffset()

            @header = ko.observable
                title: 'Say what'
            @footer = ko.observable
                title: 'come at get it!'
            @content =
                posts: ko.pureComputed =>
                    @allPosts()[@startPostIndexToDisplay()...@endPostIndexToDisplay()]
                selectedPost: ko.pureComputed =>
                    @allPosts()[@selectedPostIndex()]

        loadPosts: (posts) =>
            @allPosts posts
            @resetPage()

        resetPage: =>
            @currentPage 0
            @selectedPostOffset 0

        nextPost: =>
            if @isLastRow()
                @nextPage()
            else
                @selectedPostOffset @selectedPostOffset() + 1

        isLastRow: =>
            @selectedPostOffset() + 1 is @rowsToShow

        nextPage: =>
            @selectedPostOffset 0
            if @isLastPage()
                @currentPage 0
            else
                @currentPage @currentPage() + 1

        isLastPage: =>
            @endPostIndexToDisplay() is @allPosts().length
