const express = require('express')
const searchRouter = express.Router()
const { searchInteractor } = require('../Interactors/searchInteractor')
const schemas = require('../Middleware/searchRequestSchema')
const middleware = require('../Middleware/middleware')

searchRouter.post(
  '/do-search',
  middleware(schemas.searchRequest),
  async (req, res) => {
    try {
      const { name, state, availability } = req.body
      const result = await searchInteractor({ name, state, availability })
      res.status(200).send(result)
    } catch (error) {}
  },
)

module.exports = searchRouter
