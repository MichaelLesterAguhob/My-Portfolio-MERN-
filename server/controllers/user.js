
const brcypt = require("bcryptjs")
const User = require('../models/User');
const {errorHandler, createAccessToken} = require('../authentication')

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
    const {email, password} = req.body
    const account = await User.findOne({email});

    if(!account) {
        return res.status(200).send({success: false, message: "Email doesn't exists"})
    } 

    const isPasswordMatched = brcypt.compareSync(password, account.password);

    if(isPasswordMatched) {
        res.status(201).send({success: true, access: createAccessToken(account)})
    } else {    
        res.status(200).send({success: false, message: "Incorrect Password"})
    }
}

module.exports.getUserDetails = async (req, res) => {
    const {id} = req.user;
    const accountDetails = await User.findById(id);

    if(!accountDetails) {
        return res.status(200).send({success: false, message: "Error on getting user details"})
    } else {
        res.status(200).send({success: true, user: accountDetails})
    }
}

module.exports.updatePassword = async (req, res) => {
    const {id} = req.user;
    const newPassword = brcypt.hashSync(req.body.password, 10);

    const account = await User.findById(id);
    if(!account) {
        return res.status(200).send({success: false, message: "Error on updating password"})
    } else {
        account.password = newPassword;
        account.save().then(result => {
            res.status(200).send({success: true, user: account})
        })
    }
}

module.exports.uploadResume = async (req, res) => {
    res.send('upload resume is working')   
}

module.exports.updateResume = async (req, res) => {
    res.send('update resume is working')   
}


