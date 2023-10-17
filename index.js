const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/articleRoute')
require("dotenv").config()
const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to the MongoDB')
    app.listen(PORT, () => {
        console.log(`NodeApi is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})