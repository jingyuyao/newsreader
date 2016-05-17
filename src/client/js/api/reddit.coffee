define ['underscore', 'models/post'], (_, Post) ->
    # Helper piper
    toJson = (response) ->
        response.json()

    class Reddit
        @baseUrl = 'https://www.reddit.com'
        frontPage: ->
            fetch("#{Reddit.baseUrl}/.json").then(toJson).then (json) ->
                rawPosts = json.data.children
                _.map rawPosts, (rawPost) ->
                    new Post rawPost.data.title, rawPost.data.url
