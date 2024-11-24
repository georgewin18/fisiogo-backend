const Chat = require('../models/chat.model')

const getChat = async (req, res) => {
  const { body } = req
  
  if (body.pasien && body.fisioterapis) {   
    try {
      const chat = await Chat.find(body)
      res.status(200).json(chat)
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  } else {
    res.status(400).json({
      message: 'wrong body format'
    })
  }
}

const createChat = async (req, res) => {
  const { body } = res

  try {
    const chat = await Chat.create(body)
    res.status(201).json(chat)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateChat = async (req, res) => {
  const { body } = res

  if (!body.pasien || !body.fisioterapis || !body.sender || !body.text) {
    res.status(400).json({
      message: 'wrong body format'
    })
    return
  }

  const newChat = {
    sender: body.sender,
    text: body.text,
    time: new Date().toJSON()
  }

  try {
    const chat = await Chat.updateOne(
      { 'pasien': body.pasien,
        'fisioterapis': body.fisioterapis
      },
      {
        $push: { chat: newChat }
      }
    )
    res.status(201).json(newChat)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })    
  }
}

module.exports = {
  getChat,
  createChat,
  updateChat
}