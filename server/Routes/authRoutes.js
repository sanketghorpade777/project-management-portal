const express = require('express');
require('dotenv').config();
const router = express.Router();


const controller = require('../Controllers/authController');


router.get('/api/login',controller.login);
router.get('/register',controller.Register);



module.exports = router;