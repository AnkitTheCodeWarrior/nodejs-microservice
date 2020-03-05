const mongoose = require('mongoose')



const pmkvyFinanceSpoc = new mongoose.Schema({
    email : String,
    userName : String,
    role : String,
    firstName : String,
    phone : {
        mobile : Number
    },
    created_at : Date,
    updated_at : Date,
    hasChangedDefPass : Boolean,
    type : {
        name : String
    }
})


module.exports = pmkvyFinanceSpoc