const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobile: Number,
    password: String,
    loginHistory : {
        timestamp: Date,
    },
    passwordHistory: {
        password: String
    }
})


module.exports = userSchema