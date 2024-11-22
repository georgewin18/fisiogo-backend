require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PasienRoutes = require('./routes/pasien.route')
const FisioterapisRoutes = require('./routes/fisioterapis.route')
const JadwalTerapiRoutes = require('./routes/jadwal_terapi.route')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Welcome to FisioGo-API')
})

app.use('/api/pasien', PasienRoutes)
app.use('/api/fisioterapis', FisioterapisRoutes)
app.use('/api/jadwalTerapi', JadwalTerapiRoutes)

async function startServer() {
  try {
    await mongoose.connect(process.env.CONN_STRING)
    console.log('Connected to database')

    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.error('Failed to connect to database:', error)
  }
}
startServer()

export default app