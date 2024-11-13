const JadwalTerapi = require('../models/jadwal_terapi.model')

const getJadwalTerapi = async (req, res) => {
  try {
    const jadwalTerapi = await JadwalTerapi.find({})
    res.status(200).json(jadwalTerapi)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const getJadwalTerapiById = async (req, res) => {
  const { id } = req.params

  try {
    const jadwalTerapi = await JadwalTerapi.findById(id)
    if (!jadwalTerapi) {
      return res.status(404).json({
        message: "Jadwal Terapi Not Found"
      })
    }
    res.status(200).json(jadwalTerapi) 
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createJadwalTerapi = async (req, res) => {
  const { body } = req
  
  try {
    const jadwalTerapi = await JadwalTerapi.create(body)
    res.status(201).json(jadwalTerapi) 
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateJadwalTerapi = async (req, res) => {
  const { id } = req.params
  const { body } = req

  try {
    const jadwalTerapi = await JadwalTerapi.findByIdAndUpdate(id, body)
    if (!jadwalTerapi) {
      return res.status(404).json({
        message: "Jadwal Terapi Not Found"
      })
    }
    res.status(201).json(jadwalTerapi) 
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteJadwalTerapi = async (req, res) => {
  const { id } = req.params

  try {
    const jadwalTerapi = await JadwalTerapi.findByIdAndDelete(id)
    if (!jadwalTerapi) {
      return res.status(404).json({
        message: "Jadwal Terapi Not Found"
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
  getJadwalTerapi,
  getJadwalTerapiById,
  createJadwalTerapi,
  updateJadwalTerapi,
  deleteJadwalTerapi
}