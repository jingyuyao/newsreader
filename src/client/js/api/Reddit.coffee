define [], ->
    # Helper piper
    toJson = (response) ->
        response.json()

    class Reddit
        @baseUrl = 'https://www.reddit.com'
        frontPage: ->
            fetch("#{Reddit.baseUrl}/.json").then(toJson).then (json) ->
                json.data.children.map (child) ->
                    key: child.data.id
                    title: child.data.title
                    url: child.data.url
