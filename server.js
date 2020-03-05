'use strict'
/* Standard Module Imports */
const express = require('express')
const path = require('path')
const lusca = require('lusca')
const cors = require('cors')
const bodyParser = require('body-parser')
require('pretty-error').start()

/* Custom module Imports */
const config = require(path.resolve(__dirname, './config/index.js'))
const HealthCheck = require(path.resolve(__dirname, './app/helpers/health-check.js'))
const Middleware = require(path.resolve(__dirname, './middleware/middleware.js'))
const mongooseHelper = require(path.resolve(__dirname, './config/database/mongoose.js'))
const logger = require('./utils/winston-logger.js')

/* Imports Done */

/* Instantiating the app */
const app = express()
app.set('port', process.env.PORT || config.server.port)

/* Static file serve */
app.use(express.static(path.resolve(__dirname, '/public')))

/* Request setup */
app.use(cors({ credentials: true, origin: true }))
app.use(function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, role, role-region, admin, user-id, type, userid, self')
  res.header('Access-Control-Expose-Headers', 'organizationId, cardConfigVersion')
  if (req.method === 'OPTIONS') return res.send(200)
  next()
})

/* Payload Parsers */
app.use(bodyParser.json({ limit: '50mb' }));

/* Intialize the db */
(async () => {
  try {
    const connection = new mongooseHelper()

    await connection.startMongo()


    /* Start the server */
    app.listen(app.get('port'))
    logger.info('Express server listening on port ::: ' + app.get('port'))
    /* Health Check */
    app.get('/HealthCheck', HealthCheck.check(app.options))

    /* Configure csrf with lusca */
    const csrfOptions = {
      secret: 'thequickbrownfoxjumpsoverthelazydog~!@#$%',
      cookie: {
        options: {
          httpOnly: true,
          secure: true
        }
      },
      whitelist: config.whitelistIPs
    }
    // app.use(lusca.csrf(csrfOptions))
    // app.use(lusca.xframe('SAMEORIGIN'))
    // app.use(lusca.hsts({ maxAge: 31536000 }))

    /* Introduce authentication middle ware */
    // app.use('/api/v1/cert/*', Middleware.validateRequest(app.options))

    app.use('/api/v2/server', require(path.resolve(__dirname, './routes')))

    
  } catch (e) {
    logger.error(e)
  }
})()
module.exports = app
