class CustomError extends Error {
  constructor (statusCode = 500, ...params) {
    if (typeof arguments['0'] !== 'number') {
      params = [arguments['0']]
    }

    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    if (typeof arguments['0'] !== 'number') {
      this.statusCode = 500
    } else {
      this.statusCode = statusCode
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
    // Custom debugging information
    this.date = new Date()
  }
}

module.exports = CustomError
