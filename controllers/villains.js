const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll({
    attributes: ['name', 'movie', 'slug'],
  })

  return response.send(villains)
}

const getBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const matchingSlug = await models.villains.findOne({
      where: { slug },
      attributes: ['name', 'movie', 'slug'],
    })

    return matchingSlug
      ? response.status(200).send(matchingSlug)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again')
  }
}

const saveNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('The following fields are required: name, movie, slug')
  }

  const newVillain = await models.villains.create({ name, movie, slug })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getBySlug, saveNewVillain }
