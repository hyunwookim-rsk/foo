const express = require('express')
const app = express()
const port = 4000

const { Sequelize } = require('sequelize');
const { initModels } = require('./models/init-models');
const sequelize = new Sequelize('test_db', 'root', '3gjF66W3cRI', {
  host: 'jenkins.gapmoe.net',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
    idle: 10000
  }
})
const models = initModels(sequelize);

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
 * @apiSuccess {String} Return ok message. yeah!
 */
app.get('/status', (req, res) => {
  res.send('ok!')
})

app.get('/users', (req, res) => {
  sequelize.authenticate()
  .then(() => {
    return models.user.findAll();
  })
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    console.log('error', err);
    res.send('error')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})