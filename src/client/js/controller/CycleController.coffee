define [], ->
    class Controller
        constructor: (@viewmodel) ->
            # Configs
            @perPostDuration = 1000

            @intervalHandle = null

        start: =>
            @stop()
            @intervalHandle = setInterval =>
                @viewModel.nextPost()
            , @perPostDuration

        stop: =>
            if @intervalHandle?
                clearInterval @intervalHandle

