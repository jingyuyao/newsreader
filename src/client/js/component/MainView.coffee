define ['react', 'component/PostList', 'component/PostDetail'], (React, PostList, PostDetail) ->
    {div} = React.DOM

    React.createFactory React.createClass
        displayName: 'MainView'

        render: ->
            postList = PostList
                posts: @state.posts
                selectedIndex: @state.selectedIndex
                selectedChangedTo: @selectedChangedTo

            selectedPost = @state.posts[@state.selectedIndex]
            postDetailData = {}
            (postDetailData.post = selectedPost) if selectedPost?

            postDetail = PostDetail postDetailData

            header = div {className: 'header'}
            content = div {className: 'content'}, postList, postDetail
            footer = div {className: 'footer'}

            div {className: 'main-view'}, header, content, footer

        getInitialState: ->
            selectedIndex: 0
            posts: []

        componentDidMount: ->
            @props.api.frontPage().then (posts) =>
                @setState
                    posts: posts

        selectedChangedTo: (index) ->
            @setState
                selectedIndex: index
