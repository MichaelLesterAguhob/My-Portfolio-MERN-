
const brcypt = require("bcryptjs")
const User = require('../models/User');
const {errorHandler} = require('../authentication')

module.exports.register = async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: brcypt.hashSync(req.body.password, 10)
    })

    newUser.save().then(user => {
        res.status(201).send({success: true, user})
    }).catch(error => errorHandler(error, req, res))
} 

module.exports.login = async (req, res) => {
    res.send('login is working')   
}

module.exports.getUserDetails = async (req, res) => {
    res.send('get user details is working')   
}

module.exports.updatePassword = async (req, res) => {
    res.send('update pass is working')   
}

module.exports.uploadResume = async (req, res) => {
    res.send('upload resume is working')   
}

module.exports.updateResume = async (req, res) => {
    res.send('update resume is working')   
}


