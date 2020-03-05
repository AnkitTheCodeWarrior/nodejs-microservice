const Router = require('express')
const router = Router.Router()
const PMVController = require('./app/controllers/pmv.js')
const Middleware = require('./middleware/middleware')
const Utils = require('./utils/utils');

const authMiddlewareCall = async(req, res, next) => {
    try {
        await Middleware.validate(req);
        next();
    } catch (e) {
        return Utils.sendResponse(res, null, 403, 'Not Authroized', 'You are not authorized to use this api')
    }
};

// Route List

router.route('/generateExcelPmv')
    .get(authMiddlewareCall, new PMVController().generateExcelSttPmv);

module.exports = router;