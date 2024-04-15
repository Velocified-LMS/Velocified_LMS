const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js'); 

router.get('/info', isAuthenticated, userController.getUser);

router.post('/create', isAuthenticated, userController.createUser);

router.get('/get', isAuthenticated, userController.getUserByAttribute);

router.post('/update', isAuthenticated, userController.updateUser);

router.post('/register', userController.register);

router.post('/reset', userController.reset);

router.post('/validate', userController.validateUser);

router.post('/login', userController.authorizeLogin);

router.get('/logout', userController.logout);

router.get('/access', isAuthenticated, userController.access);

module.exports = router;
