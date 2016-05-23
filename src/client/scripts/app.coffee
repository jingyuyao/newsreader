React = require 'react'
ReactDOM = require 'react-dom'

Reddit = require './apis/Reddit.coffee'
mainViewFactory = require './components/mainView.coffee'

reddit = new Reddit()

container = document.getElementById 'container'
mainView = mainViewFactory
    api: reddit

ReactDOM.render mainView, container
