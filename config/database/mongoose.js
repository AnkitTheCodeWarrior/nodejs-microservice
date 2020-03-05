const path = require('path')
var config = require(path.resolve(__dirname, '../index.js'))
const mongoose = require('mongoose')
const logger = require('../../utils/winston-logger.js')
class Mongo {
  startMongo () {
    return new Promise(async (resolve, reject) => {
      try {
        let mongoUri = config.database.withoutAuth
        const mongooseOptions = {
          useFindAndModify: false,
          useNewUrlParser: true,
          reconnectTries: Number.MAX_VALUE,
          reconnectInterval: 1000,
        }
        if (config.database.isProd) {
          mongooseOptions.auth = config.database.auth
          mongoUri = config.database.uri
        }

        mongoose.connect(mongoUri, mongooseOptions)
        mongoose.connection.once('error', error => {
          reject(error)
        })

        mongoose.connection.once('connected', () => {
          logger.info('Database connection successful')
          resolve(true)
        })
        mongoose.connection.once('disconnected', () => {
          logger.info('Database disconnected successfully')
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
module.exports = Mongo
