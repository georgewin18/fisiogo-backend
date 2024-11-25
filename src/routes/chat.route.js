const express = require('express')
const ChatController = require('../controllers/chat.controller')
const Pasien = require('../models/pasien.model')
const router = express.Router()

router.get('/', ChatController.getChat)
router.post('/', ChatController.createChat)
router.patch('/', ChatController.updateChat)

module.exports = router