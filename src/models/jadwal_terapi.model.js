const mongoose = require('mongoose')

const JadwalTerapiSchema = mongoose.Schema(
  {
    pasien: {
      type: String,
      required: true
    },

    fisioterapis: {
      type: String,
      required: true
    },

    sessions: {
      type: Number,
      required: true
    },

    schedule: [
      {
        date: {
          type: Date,
          required: true
        },

        status: {
          type: String,
          required: true
        }
      }
    ],

    title: {
      type: String,
      required: true
    },

    detail: {
      type: String,
      required: true
    }
  }
)

const JadwalTerapi = mongoose.model("jadwalTerapi", JadwalTerapiSchema)

module.exports = JadwalTerapi