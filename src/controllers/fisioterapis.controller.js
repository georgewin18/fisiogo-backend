const Fisioterapis = require('../models/fisioterapis.model')

const getFisioterapis = async (req, res) => {
  try {
    const fisioterapis = await Fisioterapis.find({})
    res.status(200).json(fisioterapis)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const getFisioterapisByEmail = async (req, res) => {
  const { body } = req

  try {
    const fisioterapis = await Fisioterapis.find(body)
    if (!fisioterapis) {
      return res.status(404).json({
        message: "Fisioterapis Not Found"
      })
    }
    res.status(200).json(fisioterapis)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const getFisioterapisById = async (req, res) => {
  const { id } = req.params

  try {
    const fisioterapis = await Fisioterapis.findById(id)
    if (!fisioterapis) {
      return res.status(404).json({
        message: "Fisioterapis Not Found"
      })
    }
    res.status(200).json(fisioterapis)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createFisioterapis = async (req, res) => {
  const { body } = req

  try {
    const fisioterapis = await Fisioterapis.create(body)
    res.status(201).json(fisioterapis)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateFisioterapis = async (req, res) => {
  const { id } = req.params
  const { body } = req

  try {
    const fisioterapis = await Fisioterapis.findByIdAndUpdate(id, body)
    if (!fisioterapis) {
      return res.status(404).json({
        message: "Fisioterapis Not Found"
      })
    }
    res.status(201).json(fisioterapis)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteFisioterapis = async (req, res) => {
  const { id } = req.params

  try {
    const fisioterapis = await Fisioterapis.findByIdAndDelete(id)
    if (!fisioterapis) {
      return res.status(404).json({
        message: "Fisioterapis Not Found"
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
  getFisioterapis,
  getFisioterapisByEmail,
  getFisioterapisById,
  createFisioterapis,
  updateFisioterapis,
  deleteFisioterapis
}