require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PasienRoutes = require('./routes/pasien.route')
const FisioterapisRoutes = require('./routes/fisioterapis.route')
const JadwalTerapiRoutes = require('./routes/jadwal_terapi.route')
const ChatRoutes = require('./routes/chat.route')
const PembayaranRoutes = require('./routes/pembayaran.route')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Welcome to FisioGo-API')
  console.log('it works')
})

app.use('/api/pasien', PasienRoutes)
app.use('/api/fisioterapis', FisioterapisRoutes)
app.use('/api/jadwalTerapi', JadwalTerapiRoutes)
app.use('/api/chat', ChatRoutes)
app.use('/api/pembayaran', PembayaranRoutes)

async function getConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to database')
  } catch (error) {
    console.error('Failed to connect to database:', error)
  }
}
getConnection()

app.listen(port, () => {
  console.log(`server running in port ${port}`)
})