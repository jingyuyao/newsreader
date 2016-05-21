define ['api/BaseApi'], (BaseApi) ->
    class Reddit extends BaseApi
        @baseUrl = 'https://www.reddit.com/'

        frontPage: ->
            fetch("#{Reddit.baseUrl}.json")
                .then @checkStatus
                .then @toJson
                .then (json) ->
                    json.data.children.map (child) ->
                        child.data
