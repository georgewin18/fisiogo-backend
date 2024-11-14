const mongoose = require("mongoose")

const FisioterapisSchema = mongoose.Schema(
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

    speciality: {
      type: String,
      required: true
    },

    therapy: [
      {
        title: {
          type: String,
          required: false,
          default: null
        },

        pasien: {
          type: String,
          required: false,
          default: null
        }
      }
    ]
  }
)

const Fisioterapis = mongoose.model("fisioterapis", FisioterapisSchema)

module.exports = Fisioterapis