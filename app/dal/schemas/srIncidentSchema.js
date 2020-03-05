const mongoose = require('mongoose')

const srIncidentSchema = new mongoose.Schema({
    "srId": String,
    "changedBy": String,
    "comments": String,
    "changeType": String,
    "attendanceChange": {
        "userName": String,
        "changedReason": String
    },
    "tcStatusChange": {
        "userName": String,
        "status": String
    },
    "tpDeactivation": {
        "userName": String
    },
    "tcDeactivation": {
        "userName": String
    },
    "assessmentDateChange": {
        'batchId': String,
        "assessmentStartDate": Date,
        "assessmentEndDate": Date,
        "qpCode": String
    }
}, {
    timestamps: true
})


module.exports = srIncidentSchema