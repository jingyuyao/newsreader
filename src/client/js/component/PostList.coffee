define ['react', 'component/PostListItem'], (React, PostListItem) ->
    {div} = React.DOM

    React.createFactory React.createClass
        displayName: 'PostList'

        render: ->
            items = @props.posts.map (post, i) =>
                PostListItem
                    post: post
                    key: post.id
                    index: i
                    onClick: @handleClick

            div {className: 'post-list'}, items

        getDefaultProps: ->
            posts: []
            selectedChangedTo: Function
            selectedIndex: 0

        handleClick: (event, i) ->
            @props.selectedChangedTo i
