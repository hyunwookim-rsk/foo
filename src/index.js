const express = require('express')
const app = express()
const port = 3000


/**
 * @api {get} / Hello_World Server
 * @apiName Hello world app
 * @apiGroup Backend
 *
 * @apiSuccess {String} Return Hello World message.
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * @api {get} /status Check_status_of_server Server
 * @apiName App status
 * @apiGroup Backend
 *
 * @apiSuccess {String} Return ok message.
 */
 app.get('/status', (req, res) => {
  res.send('ok!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})