const generate = require('nanoid/async/generate')
class Utils {
  static async uniqueIdFromInput (input = '1234567890abcdefghijklmnopqrstuvwxyz', length = 10) {
    const q = Q.defer()
    try {
      const result = await generate(input, length)
      q.resolve(result)
    } catch (e) {
      q.reject(e)
      return q.promise
    }
    return q.promise
  }
  static sendResponse (res, data, statusCode, status, message) {
    const response = {}
    const responseStatusCode = statusCode || 200
    response.data = data || null
    response.statusCode = responseStatusCode
    response.status = status || 'success'
    response.message = message || null

    return res.status(responseStatusCode).json(response)
  }
 
}


module.exports = Utils
