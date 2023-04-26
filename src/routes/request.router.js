const express = require('express')
const RequestController = require('../controllers/request.controller')
const router = express.Router()

router.get('/request', RequestController.randomJokes)

module.exports = {
    requestRouter: router
}
