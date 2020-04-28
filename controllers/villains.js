const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll({
    attributes: ['name', 'movie', 'slug'],
  }).then(function (list) {
    return list
  })

  return response.send(villains)
}

const getBySlug = async (request, response) => {
  const { slug } = request.params

  const matchingSlug = await models.villains.findOne({
    where: {
      slug
    },
    attributes: ['name', 'movie', 'slug'],
  }).then(function (columns) {
    return columns
      ? response.status(200).json(columns)
      : response.sendStatus(404)
  })
}

const saveNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response
      .status(400)
      .send('The following fields are required: name, movie, slug')
  }

  const newVillain = await models.villains.create({ name, movie, slug })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getBySlug, saveNewVillain }
