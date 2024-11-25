const { errorToJSON } = require("next/dist/server/render")
const Pembayaran = require("../models/pembayaran")

const getPembayaran = async (req, res) => {
  const { body } = req

  try {
    const pembayaran = await Pembayaran.find(body)
    res.status(200).json(pembayaran)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createPembayaran = async (req, res) => {
  const { body } = req
  
  try {
    const pembayaran = await Pembayaran.create(body)
    res.status(201).json(pembayaran)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateStatusPembayaran = async (req, res) => {
  const { body } = req

  const pasien = body.pasien
  const therapy = body.therapy

  try {
    const pembayaran = await Pembayaran.updateOne(
      { 'pasien': pasien,
        'therapy': therapy,
      },
      {
        $set: { 'status': 'Pembayaran Selesai' }
      }
    )
    res.status(201).json(pembayaran)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getPembayaran,
  createPembayaran,
  updateStatusPembayaran
}