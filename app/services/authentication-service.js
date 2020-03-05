
const authDal = require('../dal/dal/authentication')
const moment = require('moment');
class BatchService {
    register(payLoad) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(payLoad);
                
                let authDals = new authDal()
                let result = await authDals.register(payLoad)
                resolve(result)
            } catch (e) {
                reject(e)
            }
        })
    }
}
module.exports = BatchService