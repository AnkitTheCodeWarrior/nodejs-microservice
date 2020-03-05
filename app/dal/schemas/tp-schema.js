const mongoose = require('mongoose');

const sn_schema = new mongoose.Schema({
    schemeRefId: String,
    actionType: String,
    tcId: String,
    tpId: String,
    batchId: String,
    scnId: String,
    issuedBy: String,
    issuedByCMAAt: Date,
    issuedByCMAHeadAt: Date,
    duration: {
        fromDate: Date,
        toDate: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { _id: false })

const updateShowCauseNotice = new mongoose.Schema({ // TP
    "userName": { type: String },
    "spoc": {
        "firstName": String,
        "email": String,
        "mobileNumber": Number
    },
    "financial": {
        "pan": String,
    },
    "gstDetails": {
        "hasGSTNumber": Boolean,
        "gstNumber": String,
        "gstDocumentName": String
    },
    "deactivationBackup": Object,
    "deactivated": {type: Boolean, default: false},
    "showCauseNoticeDetails": {
        type: [sn_schema]
    }
}, { _id: false, strict: false })

const updateShowCauseNoticeTC = new mongoose.Schema({
    "status": String,
    "userName": String,
    "spoc": {
        "firstName": String,
        "email": String,
        "mobileNumber": Number,
        "cistatus": String,
        "civerified": Boolean,
        "landline": String,
        "ciReview": String,
        "ciFirstName": String,
        "ciEmail": String,
        "ciMobileNumber": Number,
        "ciLandline": String,
        "isSpocFacilitator": Boolean
    },
    "trainingPartner": {
        "userName": {
            type: String
        },
        "email": {
            type: String
        }
    },
    "deactivationBackup": Object,
    "deactivated": {type: Boolean, default: false},
    "showCauseNoticeDetails": {
        type: [sn_schema]
    }
}, { _id: false, strict: false })

const counters = new mongoose.Schema({
    "key": String,
    "value": Number
})
module.exports = { updateShowCauseNotice, updateShowCauseNoticeTC, counters }