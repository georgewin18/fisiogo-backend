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
    }
  }
)

const Fisioterapis = mongoose.model("fisioterapis", FisioterapisSchema)

module.exports = Fisioterapis