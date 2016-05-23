React = require 'react'
ReactDOM = require 'react-dom'
Reddit = require './apis/Reddit.coffee'
MainView = require './components/MainView.coffee'

reddit = new Reddit()

container = document.getElementById 'container'
mainView = MainView
    api: reddit

ReactDOM.render mainView, container
