const mongoose = require('mongoose')


const cmWorkflowSchema = new mongoose.Schema({
    batchId: {
        type: Number
    },
    tpId: {
        type: String
    },
    tcId: String,
    scnId: String,
    issueAgainst: String,
    issuedBy: String,
    tcName: String,
    status: String,
    comments: String,
    additionalDiscrepancieComment: String,
    document: [String],
    tpOrganizationName: String,
    // documents1: [String],
    // documents2: [String],
    // documents3: [String],
    // documents4: [String],
    issuedByRole: String,
    visitDate: String,
    refId: String,
    flowStatus: String,
    createdAt: Date,
    tpName: String,
    batchStartDate: {
        type: Date
    },
    batchEndDate: {
        type: Date
    },
    batchName: String,
    schemeName: String,
    subSchemeName: String,
    issuedType: String,
    schemeType: String,
    showCauseAction: String,
    duration: {
        fromDate: Date,
        toDate: Date
    }
})

module.exports = cmWorkflowSchema