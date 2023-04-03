const { searchInteractor } = require('../searchInteractor')
const { InputValidator } = require('../../Entities/validator')

describe('Interactor layer and integration testing...', () => {
  test('Get data from search persistence layer', async () => {
    const clinicName = 'UAB Hospital'
    const stateName = ''
    const availability = ''
    const validator = new InputValidator(clinicName, stateName, availability)
    if (validator.validateName(clinicName)) {
      const data = await searchInteractor(clinicName, stateName, availability)
      expect(data.msg).toEqual('Filtered data')
    }
  })
})
