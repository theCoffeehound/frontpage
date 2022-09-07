const express = require('express');
const usersControllers = require('../controllers/UserControllers.js');

// luodaan tänne reititys users resurssille
const router = express.Router();

//  USER-endpointit
router.get('/', usersControllers.getAllUsers);
router.post('/login', usersControllers.login);
router.post('/signup', usersControllers.register);


module.exports = router;