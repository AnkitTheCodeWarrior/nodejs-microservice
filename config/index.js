'use strict'
/* standard imports */
const path = require('path')
const isThere = require('is-there')
const extend = require('extend')


/* custom imports */
const currentEnv = process.env.NODE_ENV || 'development'
const envFilePath = path.resolve(__dirname ,`./environment/${currentEnv}.js`)
//console.log("env -------------->",envFilePath);
const logger = require(path.resolve(__dirname,`../utils/winston-logger`))
const fixedConfig = require(path.resolve(__dirname,'./app-fixed-config'))

let environmentOptions
if (!isThere(envFilePath)) {
  logger.error('Environment file missing')
  return
} else {
  environmentOptions = require(envFilePath)
}
let envObjectFormation = {
  server : environmentOptions.server,
  database: environmentOptions.database,
  aws: environmentOptions.aws,
  externalServices: environmentOptions.externalServices,
  controls: environmentOptions.controls,
  securityDetails : environmentOptions.securityDetails,
  others : environmentOptions.others,
  paths: environmentOptions.paths,
  currentEnvironment: currentEnv
}
/* Extend the variable parameters to fixed parameters */
let finalExport = extend(envObjectFormation,fixedConfig)

// //console.log(finalExport)
module.exports = finalExport
