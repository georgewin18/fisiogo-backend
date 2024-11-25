const mongoose = require('mongoose')

const PembayaranSchema = mongoose.Schema(
  {
    pasien: {
      type: String,
      required: true
    },

    fisioterapis: {
      type: String,
      required: true
    },

    therapy: {
      type: String,
      required: true
    },

    sessions: {
      type: Number,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      required: false,
      default: 'Menunggu Pembayaran'
    }
  }
)

const Pembayaran = mongoose.model("pembayaran", PembayaranSchema)

module.exports = Pembayaran