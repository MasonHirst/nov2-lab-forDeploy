const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {home, style, jScript} = require('./controllers/pageCtrl.js')

app.get("/", home)
app.get("/css", style)
app.get("/js", jScript)


const { PORT } = process.env




app.listen(PORT, () => console.log('server running on port ', PORT))