const express = require('express')
const PasienController = require('../controllers/pasien.controller')
const router = express.Router()

router.get('/', PasienController.getPasien)
router.get('/:id', PasienController.getPasienById)
router.post('/email', PasienController.getPasienByEmail)
router.post('/', PasienController.createPasien)
router.patch('/:id', PasienController.updatePasien)
router.delete('/:id', PasienController.deletePasien)

module.exports = router