const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disneyvillains', 'disneyvillains', 'y0$0yb@dguy', {
  host: 'localhost', dialect: 'mysql'
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }
