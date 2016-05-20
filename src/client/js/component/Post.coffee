define ['react'], (React) ->
    Post = React.createClass
        displayName: 'Post'
        render: ->
            title = React.DOM.span null, @props.title
            url = React.DOM.span null, @props.url
            React.DOM.div
                className: 'post'
            , title, url

    React.createFactory Post
