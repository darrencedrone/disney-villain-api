const express = require('express')
const bodyParser = require('body-parser')
const { getAllVillains, getBySlug, saveNewVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getBySlug)

app.post('/villains', bodyParser.json(), saveNewVillain)

app.listen(1974, () => {
  console.log('Listening on port 1974')
})
