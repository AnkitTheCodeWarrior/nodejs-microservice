
const winston = require('winston')
const colors = require('colors')
const util = require('util')
const _ = require('lodash')

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  },

  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'italic green',
    http: 'gray',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta'
  }

}
const errorStackFormat = winston.format(info => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message
    })
  }
  return info
})
winston.addColors(myCustomLevels.colors)
function devFormat() {
  const formatMessage = (info) => {
    const { timestamp, level, message } = info
    let finalFormatting = `[${colors.underline(colors.cyan(timestamp))}] [${level}]: ${util.inspect((message), true, 12, true)}`
    if (info.hasOwnProperty(Symbol.for('splat'))) {
      if (info[Symbol.for('splat')]) {
        if (_.isArray(info[Symbol.for('splat')])) {
          info[Symbol.for('splat')].forEach((ele) => {
            finalFormatting += `\n ${util.inspect((ele), true, 12, true)}`
          })
        }
      }
    }
    return finalFormatting
  }
  const formatError = (info) => {
    return `[${colors.underline(colors.red(info.timestamp))}] [${info.level}] ${info.message}\n\n${info.stack}\n`
  }
  const format = (info) => info instanceof Error ? formatError(info) : formatMessage(info)
  return winston.format.combine(winston.format.colorize(), winston.format.json(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.printf(format))
}

const logger = winston.createLogger({
  level: 'silly',
  format: devFormat(),
  transports: [
    new winston.transports.Console()
  ]
})

logger.profile = winston.profile
logger.startTimer = winston.startTimer
module.exports = logger
