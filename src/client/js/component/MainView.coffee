define ['react', 'component/Post'], (React, Post) ->
    MainView = React.createClass
        displayName: 'MainView'
        getInitialState: ->
            posts: []
        render: ->
            # React.DOM.div is just a regular component with
            # first param being a property map and a variadic
            # style of child elements
            React.DOM.div null, @state.posts.map (post) ->
                Post
                    title: post.title
                    url: post.url

    React.createFactory MainView
