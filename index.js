const express = require('express')
const cors = require('cors')
const searchRouter = require('./Routers/searchRouter')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/search', searchRouter)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
