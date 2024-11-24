const mongoose = require('mongoose')

const ChatSchema = mongoose.Schema(
  {
    pasien: {
      type: String,
      required: true
    },

    fisioterapis: {
      type: String,
      required: true
    },

    chat: [
      {
        sender: {
          type: String,
          required: false,
          default: null
        },

        text: {
          type: String,
          required: false,
          default: null
        },

        time: {
          type: Date,
          required: false,
          default: null
        }
      }
    ]
  }
)

const Chat = mongoose.model("chat", ChatSchema)

module.exports = Chat