const mongoose = require('mongoose')



const maritalStatusSchema = new mongoose.Schema({
    "name" : String,
    "id" : Number
})



module.exports = maritalStatusSchema