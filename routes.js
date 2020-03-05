const Router = require('express')
const router = Router.Router()
const AUTHMAIN = require('./app/controllers/authentication').AUTHMAIN
const Middleware = require('./middleware/middleware')
const Utils = require('./utils/utils')


router.use(`/loginservice`, async(req, res, next) => {
    /* Attach pmkvy middleware */
    try {
        // await Middleware.validate(req)
    } catch (e) {
        // //console.log('routes.js', e.toString());
        return Utils.sendResponse(res, null, 403, 'Not Authroized', 'You are not authorized to use this api')
    }
    next()
}, new AUTHMAIN().router)





module.exports = router