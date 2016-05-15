express = require 'express'
router = express.Router()

router.get '/', (req, res) ->
    res.render 'base',
        title: 'WHATS UPPPP'
        message: 'hi'

module.exports = router
