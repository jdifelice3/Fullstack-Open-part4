require('dotenv').config()
const Blog = require('./models/blog')
const express = require('express')
const connectDb = require('./services/db')
const app = require('./app')

// const app = express()

// app.use(express.json())

// connectDb()

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})