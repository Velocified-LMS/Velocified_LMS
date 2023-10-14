const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/get', isAuthenticated, messageController.getMessage);

router.post('/send', isAuthenticated, messageController.sendMessage);

module.exports = router;
