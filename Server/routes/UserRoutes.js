const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/user', isAuthenticated, userController.getUser);

router.post('/register', userController.register);
router.post('/login', userController.authorizeLogin);

module.exports = router;