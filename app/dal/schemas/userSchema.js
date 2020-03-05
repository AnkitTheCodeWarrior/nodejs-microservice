const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    "userName": String,
    "email": String,
    "phone": {
        "mobile": Number,
        "landline": Number
    },
    "deactivated": {type: Boolean, default: false},
    "deactivationBackup": Object
})


module.exports = userSchema