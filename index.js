const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bestsaejin12:7th7r2dSoWLl2BBS@boilerplate.xixcwut.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {  res.send('Hello World!')})

app.listen(port, () => {  console.log(`Example app listening on port ${port}`)})