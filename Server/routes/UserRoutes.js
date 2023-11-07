const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/info', isAuthenticated, userController.getUser);

router.post('/update', isAuthenticated, userController.updateUser);

router.post('/register', userController.register);

router.post('/login', userController.authorizeLogin);

module.exports = router;
