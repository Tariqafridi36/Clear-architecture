const { seachPersistence } = require('../Persisters/searchPersistence')
const { InputValidator } = require('../Entities/validator')

exports.searchInteractor = async ({ name, state, availability }) => {
  try {
    const validator = new InputValidator(name, state, availability)

    const data = await seachPersistence()
    if (
      validator.validateName() &&
      validator.validateState() &&
      validator.validateTime()
    ) {
      const resultData = await data.filter(
        (x) =>
          x.name === name ||
          x.stateName === state ||
          (x.availability?.from === availability?.from &&
            x.availability?.to === availability?.to),
      )

      return { msg: 'Filtered data', data: resultData }
    } else {
      return { msg: 'All data', data: data }
    }
  } catch (error) {
    console.log(error)
    return [{ msg: 'Something went wrong!', data: null }]
  }
}
