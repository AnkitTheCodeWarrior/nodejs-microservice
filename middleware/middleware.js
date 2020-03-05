const _ = require('lodash')
const path = require('path')
const config = require(path.resolve(__dirname, '../config'))
const utils = require(path.resolve(__dirname, '../utils/utils.js'))
const allowedRoles = config.allowedRoles
var request = require('request');
// const request = require('request')

class Middleware {
  // call authservice with auth token  if success then allow
  static validate(req) {
    // //console.log(config);
    return new Promise(async (resolve, reject) => {
      // call auth service
      // if success resolve
      // if (err)
      //reject
      // //console.log(config);
      try {
        if (_.isNil(req.headers.authorization)) {
          reject('Not authorized');
        }
        // //console.log(config.externalServices.authService, req.headers);
        const options = { url: config.externalServices.authService, headers: { Authorization: req.headers.authorization } };
        request.get(options, (error, response, body) => {
          if (error) {
            throw error
          }
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            let LoggedInUser = {
              userName: info.userName,
              role: info.role,
              firstName: info.firstName,
              lastName: info.lastName,
              type: info.type
            }
            req.LoggedInUser = LoggedInUser;
            resolve(true);
          } else {
            reject(response.body)
          }
        });
      } catch (e) {
        reject(e)
      }
    })
  }
}
module.exports = Middleware