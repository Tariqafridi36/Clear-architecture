const { seachPersistence } = require('../searchPersistence')

describe('Persistence service layer tesing', () => {
  test('Service layer retuen data', async () => {
    const searchData = await seachPersistence()
    expect(searchData.length).toBeGreaterThanOrEqual(0)
  })
})
