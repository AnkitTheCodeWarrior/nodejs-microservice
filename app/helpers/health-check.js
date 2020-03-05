const logger = require('../../utils/winston-logger.js')
module.exports.check = () => {
  const mongoose = require('mongoose')
  return (req, res) => {
    const response = {
      mongoDb: 'NOT OK'
    }
    let statusCode = 502 // Bad Gateway
    const mongoConnected = mongoose.connection.readyState === 1
    if (mongoConnected) {
      logger.info('Mongo Health Check :: OK')
      response.mongoDb = 'OK'
      statusCode = 200
    } else {
      logger.error('Mongo Health Check :: NOT OK')
      response.mongoDb = 'NOT OK'
    }
    res.status(statusCode).json(response)
  }
}
