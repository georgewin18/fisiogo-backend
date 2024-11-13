const { parseVersionInfo } = require('next/dist/server/dev/parse-version-info')
const Pasien = require('../models/pasien.model')

const getPasien = async (req, res) => {
  try {
    const pasien = await Pasien.find({})
    res.status(200).json(pasien)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const getPasienById = async (req, res) => {
  const { id } = req.params
  
  try {
    const pasien = await Pasien.finById(id)
    if (!pasien) {
      return res.status(404).json({
        message: "Pasien Not Found"
      })
    }
    res.status(200).json(pasien)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createPasien = async (req, res) => {
  const { body } = req

  try {
    const pasien = await Pasien.create(body)
    res.status(201).json(pasien)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updatePasien = async (req, res) => {
  const { id } = req.params
  const { body } = req

  try {
    const pasien = await Pasien.findByIdAndUpdate(id, body)
    if (!pasien) {
      return res.status(404).json({
        message: "Pasien Not Found"
      })
    }
    res.status(201).json(pasien)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deletePasien = async (req, res) => {
  const { id } = req.params

  try {
    const pasien = await Pasien.findByIdAndDelete(id)
    if (!pasien) {
      return res.status(404).json({
        message: "Pasien Not Found"
      })
    }
    res.status(200).json({
      message: "Deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getPasien,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien
}