const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const messagesController = require('../controllers/messagesController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/get', isAuthenticated, messagesController.get);

router.post('/send', isAuthenticated, messagesController.send);

module.exports = router;
