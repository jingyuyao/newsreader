define ['react'], (React) ->
    {div, span} = React.DOM

    React.createFactory React.createClass
        displayName: 'PostDetail'

        render: ->
            title = span {className: 'title'}, @props.post.title
            url = span {className: 'url'}, @props.post.url
            div {className: 'post-detail'}, title, url

        getDefaultProps: ->
            post:
                title: 'No title'
                url: null
