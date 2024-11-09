const express = require('express');
require('dotenv').config();
const router = express.Router();


const controller = require('../Controllers/authController');


router.post('/api/login',controller.login);
router.post('/api/admin/add-emp',controller.Add_employee);



module.exports = router;