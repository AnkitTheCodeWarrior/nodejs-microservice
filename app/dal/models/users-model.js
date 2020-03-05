const mongoose = require('mongoose')
// first and last argument must be collection name
// const batchEntireModel = mongoose.model('batch', batchEntireSchema , 'batch')
const userSchema = require('../schemas/users-scema')
const userModel = mongoose.model('users', userSchema , 'users')
module.exports = userModel