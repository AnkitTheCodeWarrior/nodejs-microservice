const mongoose = require('mongoose')


const jobRoleSchema = new mongoose.Schema({
    "qpCode": String,
    "version": String,
    "jobName": String,
    "jobRoleDesc": String,
    "attendanceStatus": Boolean,
    "jAssessmentStatus": String,
    "isMarkSheetGenerated": Boolean,
    "isCertified": Boolean,
    "assessmentStartDate": Date,
    "assessmentEndDate": Date
}, { _id: false })

const assessmentSchema = new mongoose.Schema({
    "batchId": Number,
    "batchName": String,
    "batchType": String,
    "trainingCentreName": String,
    "candidateUserName": String,
    "candidateUserRole": String,
    "candidateName": String,
    "candidateEmail": String,
    "candidatePhone": Number,
    "changedBy": String,
    "changedReason": String,
    "srId": String,
    "jobRoles": [jobRoleSchema]
})


module.exports = assessmentSchema