const express = require('express');
const {verify} = require('../authentication');
const userController =  require('../controllers/user');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', verify, userController.getUserDetails);
router.patch('/password', verify, userController.updatePassword);

router.post('/resume', verify, userController.uploadResume);
router.patch('/resume', verify, userController.updateResume);






module.exports = router;