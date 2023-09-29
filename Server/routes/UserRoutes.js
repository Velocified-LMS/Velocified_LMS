const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Route to create a new user
router.post('/user', userController.createUser);

// Route to get all users
router.get('/user', userController.getAllUsers);

router.get('/login', userController.authorizeLogin);


module.exports = router;
