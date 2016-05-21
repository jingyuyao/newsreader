define ['react'], (React) ->
    {div, span} = React.DOM

    React.createFactory React.createClass
        displayName: 'PostDetail'

        render: ->
            title = span {className: 'mdl-card__title title'}, @props.post.title
            url = span {className: 'mdl-card__supporting-text url'}, @props.post.url
            className = 'mdl-card
                mdl-shadow--2dp
                post-detail'
            div {className: className}, title, url

        getDefaultProps: ->
            post:
                title: 'No title'
                url: null
