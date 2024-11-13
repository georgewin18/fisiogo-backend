const express = require('express')
const FisioterapisController = require('../controllers/fisioterapis.controller')
const router = express.Router()

router.get('/', FisioterapisController.getFisioterapis)
router.get('/:id', FisioterapisController.getFisioterapisById)
router.post('/', FisioterapisController.createFisioterapis)
router.patch('/:id', FisioterapisController.updateFisioterapis)
router.delete('/:id', FisioterapisController.deleteFisioterapis)

module.exports = router