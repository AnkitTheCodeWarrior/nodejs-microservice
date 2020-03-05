const mongoose = require('mongoose')



const targetPmuSchema = new mongoose.Schema({
    email : {
        type : String
    },
   
})



module.exports = targetPmuSchema