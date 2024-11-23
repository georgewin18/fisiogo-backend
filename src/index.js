require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PasienRoutes = require('./routes/pasien.route')
const FisioterapisRoutes = require('./routes/fisioterapis.route')
const JadwalTerapiRoutes = require('./routes/jadwal_terapi.route')

const app = express()

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

async function getConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to database')
  } catch (error) {
    console.error('Failed to connect to database:', error)
  }
}
getConnection()

export default app