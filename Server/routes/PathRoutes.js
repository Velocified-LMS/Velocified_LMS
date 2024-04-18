const express = require('express');
const router = express.Router();
const pathController = require('../controllers/pathController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');
 
router.get('/', isAuthenticated, pathController.getPath);

router.get('/company', isAuthenticated, pathController.getPathsByCompany);

router.post('/create', isAuthenticated, pathController.createPath);

router.post('/update', isAuthenticated, pathController.updatePath);

module.exports = router;
