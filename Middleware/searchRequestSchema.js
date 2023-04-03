const Joi = require('joi')
const schemas = {
  searchRequest: Joi.object().keys({
    name: Joi.string().required(),
    state: Joi.string().required(),
    availability: Joi.object().keys({
      from: Joi.string(),
      to: Joi.string(),
    }),
  }),
  // define all the other schemas below
}
module.exports = schemas
