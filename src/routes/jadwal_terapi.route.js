const express = require('express')
const JadwalTerapiController = require('../controllers/jadwal_terapi.controller')
const router = express.Router()

router.get('/', JadwalTerapiController.getJadwalTerapi)
router.get('/:id', JadwalTerapiController.getJadwalTerapiById)
router.post('/', JadwalTerapiController.createJadwalTerapi)
router.patch('/:id', JadwalTerapiController.updateJadwalTerapi)
router.delete('/:id', JadwalTerapiController.deleteJadwalTerapi)

module.exports = router