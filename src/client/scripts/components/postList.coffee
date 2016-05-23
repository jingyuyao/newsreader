React = require 'react'
{div} = React.DOM

postListItemFactory = require './postListItem.coffee'

PostList = React.createClass
    displayName: 'PostList'

    render: ->
        items = @props.posts.map (post, i) =>
            postListItemFactory
                post: post
                key: post.id
                index: i
                onClick: @handleClick

        div {className: 'mdl-list post-list'}, items

    getDefaultProps: ->
        posts: []
        selectedChangedTo: Function
        selectedIndex: 0

    handleClick: (event, i) ->
        @props.selectedChangedTo i

module.exports = React.createFactory PostList
