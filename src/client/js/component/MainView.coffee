define ['react', 'component/PostListViewer'], (React, PostListViewer) ->
    MainView = React.createClass
        displayName: 'MainView'

        render: ->
            postListViewer = PostListViewer
                posts: @state.posts

            React.DOM.div {}, postListViewer

        getInitialState: ->
            posts: []

        componentDidMount: ->
            @props.api.frontPage().then (posts) =>
                @setState
                    posts: posts

    React.createFactory MainView
