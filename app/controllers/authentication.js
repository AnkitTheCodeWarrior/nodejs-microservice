const _ = require('lodash')
const router = require('express').Router()
const Utils = require('../../utils/utils.js')
const authService = require('../services/authentication-service')
class AUTHMAIN {
    constructor() {
        this.router = router
        this.setupRoutes()
    }
    setupRoutes() {
       
        this.router.route('/register')
            .post(this.register)
        
    }
    async register(req, res) {
        try {
            let payload = req.body;
            console.log(payload)
            let authServices = new authService()
            let result = await authServices.register(payload)
            let dataToSend = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                mobile: payload.mobile,
            }
            console.log(result)
            if(result === 'success') {
                Utils.sendResponse(res, dataToSend, 200, "success", "Registration completed")

            } else if(result === 'duplicate') {
                Utils.sendResponse(res, dataToSend, 409, "success", "Registration Failed , User Already Exist")
            }
        } catch (error) {   
            return Utils.sendResponse(res, null, 500, "failure", "Invalid Response")
        }
    }
}

   


module.exports = {
    AUTHMAIN: AUTHMAIN
}