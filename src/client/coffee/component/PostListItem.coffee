React = require 'react'

{div, span} = React.DOM

PostListItem = React.createClass
    displayName: 'PostListItem'

    render: ->
        title = span {className: 'title'}, @props.post.title
        url = span {className: 'mdl-list__item-text-body url'}, @props.post.url

        primaryContent = span {className: 'mdl-list__item-primary-content'}, title, url

        properties =
            className: 'mdl-list__item
                mdl-list__item--three-line
                item'
            onClick: @onClick

        div properties, primaryContent

    getDefaultProps: ->
        index: 0
        onClick: Function
        post:
            title: 'No title'
            url: null

    onClick: (event) ->
        @props.onClick event, @props.index

module.exports = React.createFactory PostListItem
