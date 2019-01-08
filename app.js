const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server is On Fire.....')
    mongoose.connect('mongodb://localhost:27017/mern-project', {userNewUrlParser: true}, () => {
        console.log('Database is Running')
    })
})