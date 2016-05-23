React = require 'react'
ReactDOM = require 'react-dom'

Reddit = require './apis/Reddit.coffee'
mainViewFactory = require './components/mainView.coffee'

mainView = mainViewFactory
    api: new Reddit()

ReactDOM.render mainView, document.getElementById 'container'
