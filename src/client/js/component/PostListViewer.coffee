define ['react', 'component/Post'], (React, Post) ->
    PostListViewer = React.createClass
        displayName: 'PostListViewer'

        render: ->
            postsToShow = @props.posts[@pageStart()...@pageEnd()].map Post

            React.DOM.div {className: 'post-list-viewer'}, postsToShow

        getDefaultProps: ->
            postsPerPage: 5
            posts: []

        getInitialState: ->
            page: 0

        componentDidMount: ->
            setInterval @nextPage, 1000

        pageStart: ->
            @state.page * @props.postsPerPage

        pageEnd: ->
            @pageStart() + @props.postsPerPage

        nextPage: ->
            if @isLastPage()
                @setState
                    page: 0
            else
                @setState
                    page: @state.page + 1

        isLastPage: ->
            @pageEnd() >= @props.posts.length

    React.createFactory PostListViewer
