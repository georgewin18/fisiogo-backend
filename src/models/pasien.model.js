const mongoose = require('mongoose')

const PasienSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    birthdate: {
      type: Date,
      required: true
    },

    gender: {
      type: String,
      required: true
    },

    progress: [
      {
        title: {
          type: String,
          required: false,
          default: null
        },

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
    ]
  }
)

const Pasien = mongoose.model("pasien", PasienSchema)

module.exports = Pasien