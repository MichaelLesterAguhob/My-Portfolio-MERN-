const express = require('express');
const router = express.Router()
const userController =  require('../controllers/user')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getUserDetails);
router.patch('/password', userController.updatePassword);

router.post('/resume', userController.uploadResume);
router.patch('/resume', userController.updateResume);






module.exports = router;