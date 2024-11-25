const express = require('express')
const PembayaranController = require('../controllers/pembayaran.controller')
const router = express.Router()

router.post('/get', PembayaranController.getPembayaran)
router.post('/', PembayaranController.createPembayaran)
router.patch('/', PembayaranController.updateStatusPembayaran)

module.exports = router