const express = require('express');
require('dotenv').config();
const router = express.Router();


const controller = require('../Controllers/authController');


router.post('/login',controller.login);
router.post('/add-employee',controller.Add_employee);



module.exports = router;