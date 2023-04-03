const { InputValidator } = require('../validator')

describe('Input validation', () => {
  const validator = new InputValidator('abc', 'xyz', {
    to: '10:00',
    to: '19:00',
  })
  test('Validate Clinic Name', () => {
    const value = validator.validateName()
    expect(value).toEqual(true)
  })

  test('Validate State Name', () => {
    const value = validator.validateName()
    expect(value).toEqual(true)
  })

  test('Validate time availability', () => {
    const value = validator.validateName()
    expect(value).toEqual(true)
  })
})
