const express = require('express');
const itemControllers = require('../controllers/itemController.js');

// luodaan tänne reititys users resurssille
const router = express.Router();

//  USER-endpointit
router.get('/', itemControllers.getItems);
router.post('/add', itemControllers.addItem);


module.exports = router;