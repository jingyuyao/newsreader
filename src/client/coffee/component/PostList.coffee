React = require 'react'
PostListItem = require './PostListItem.coffee'

{div} = React.DOM

PostList = React.createClass
    displayName: 'PostList'

    render: ->
        items = @props.posts.map (post, i) =>
            PostListItem
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
