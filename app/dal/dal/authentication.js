const path = require('path')
const userModel = require('../models/users-model')
var atob = require('atob');
var sha = require('sha256')
class AuthDal {


    register(payLoad) {
        return new Promise(async(resolve, reject) => {
            try {
                
                let decodeRawString = atob(payLoad.password);
                let toCheck = {
                    firstName: payLoad.firstName,
                    lastName: payLoad.lastName,
                    mobile: payLoad.mobile,
                    email: payLoad.email,
                    password: sha(decodeRawString)
                }
                const firstNameProject = {'firstName': toCheck.firstName}
                const lastNameProject = {'firstName': toCheck.firstName}
                const mobileProject = {'mobile': toCheck.mobile}
                const isAlreadyRegister = await userModel.find(firstNameProject, lastNameProject, mobileProject).count();
                console.log(isAlreadyRegister)
                if(isAlreadyRegister === 0) {
                    const insertUser = await userModel.insertMany(toCheck)
                    resolve('success')
                } else {
                    resolve('duplicate')
                }
            } catch (e) {
                console.log(e)
                reject(e)
            }
        })
    }

   

}


module.exports = AuthDal