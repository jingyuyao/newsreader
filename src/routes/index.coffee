express = require 'express'
router = express.Router()

router.get '/', (req, res) ->
    res.send 'Index router'

module.exports = router
