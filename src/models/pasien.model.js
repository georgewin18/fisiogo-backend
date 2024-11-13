const mongoose = require('mongoose')

const PasienSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    fisioterapis: {
      type: String,
      required: false,
      default: null
    },

    progress: {
      sesi_total: {
        type: Number,
        required: false,
        default: 0
      },
      sesi_selesai: {
        type: Number,
        required: false,
        default: 0
      },
      skor_progress: {
        type: Number,
        required: false,
        default: 0
      }
    }
  }
)

const Pasien = mongoose.model("pasien", PasienSchema)

module.exports = Pasien