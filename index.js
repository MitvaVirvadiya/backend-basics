require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Form</h1>')
})

app.get('/signup', (req, res) => {
  res.send('<h1>Sign Up Form</h1>')
})

app.get('/contact-us', (req, res) => {
  res.send('<h2>Contact us</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
