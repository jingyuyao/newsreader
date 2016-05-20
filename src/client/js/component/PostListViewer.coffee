define ['react', 'component/Post'], (React, Post) ->
    PostListViewer = React.createClass
        displayName: 'PostListViewer'

        render: ->
            React.DOM.div {}, @props.posts.map (post) ->
                Post
                    key: post.id
                    title: post.title
                    url: post.url

        getDefaultProps: ->
            postsPerPage: 5

        getInitialState: ->
            page: 0

        componentDidMount: ->

    React.createFactory PostListViewer
