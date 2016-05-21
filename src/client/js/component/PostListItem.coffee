define ['react'], (React) ->
    {div, span} = React.DOM

    React.createFactory React.createClass
        displayName: 'PostListItem'

        render: ->
            title = span {className: 'title'}, @props.post.title
            url = span {className: 'url'}, @props.post.url

            properties =
                className: 'item'
                onClick: @onClick

            div properties, title, url

        getDefaultProps: ->
            index: 0
            onClick: Function
            post:
                title: 'No title'
                url: null

        onClick: (event) ->
            @props.onClick event, @props.index
