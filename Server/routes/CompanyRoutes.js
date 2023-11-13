const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/get', isAuthenticated, companyController.getCompany);

router.post('/update', isAuthenticated, companyController.updateCompany);

module.exports = router;
