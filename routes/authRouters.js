const express = require('express');
const { login, signup, registerValidation } = require('../controllers/authController');
const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(registerValidation, signup);

module.exports = router;
