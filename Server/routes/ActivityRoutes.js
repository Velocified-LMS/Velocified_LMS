const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activityController.js');
const isAuthenticated = require('../Utils/AuthenticationUtil.js');

router.get('/', isAuthenticated, activitiesController.getActivity);

router.get('/path', activitiesController.getActivitiesByPath);

router.post('/create', isAuthenticated, activitiesController.createActivity);

router.post('/update', isAuthenticated, activitiesController.updateActivity);

module.exports = router;
