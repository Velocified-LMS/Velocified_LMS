const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/get', isAuthenticated, companyController.getCompany);

router.get('/all', isAuthenticated, companyController.getCompanies);

router.post('/update', isAuthenticated, companyController.updateCompany);

router.post('/create', isAuthenticated, companyController.createCompany);

module.exports = router;
 