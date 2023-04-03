const axios = require('axios').create()

const targetUrls = [
  'http://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json',
  'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json',
]

exports.seachPersistence = async () => {
  let responseResult = []

  try {
    const response = await axios({
      url: targetUrls[0],
      method: 'get',
      data: null,
    })

    // 1st datasource
    const response1 = await axios({
      url: targetUrls[1],
      method: 'get',
      data: null,
    })

    // snd datasource

    let dataSource = []
    response1.data.map((obj) => {
      dataSource.push({
        name: obj.clinicName,
        state: obj.stateCode,
        availability: obj.opening,
      })
    })

    // 3rd datasource will be here...

    responseResult = [...response.data, ...dataSource]
  } catch (err) {
    console.log(err.message)
  }

  return responseResult
}
