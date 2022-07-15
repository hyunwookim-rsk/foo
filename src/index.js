const express = require('express')
const app = express()
const port = 3000


/**
 * @api {get} / Hello World
 * @apiName Hello world app
 * @apiGroup User
 *
 * @apiSuccess {String} Return Hello World message.
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})