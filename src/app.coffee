express = require 'express'
app = express()
index = require './routes/index'

# Config
app.set 'view engine', 'pug'
app.set 'views', __dirname + '/views'

# Static files
app.use express.static __dirname + '/client'

# Routes
app.use '/', index

module.exports = app
