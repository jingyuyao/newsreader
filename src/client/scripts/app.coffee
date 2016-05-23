React = require 'react'
ReactDOM = require 'react-dom'
Reddit = require './api/Reddit.coffee'
MainView = require './component/MainView.coffee'

reddit = new Reddit()

container = document.getElementById 'container'
mainView = MainView
    api: reddit

ReactDOM.render mainView, container
