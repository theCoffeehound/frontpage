const express = require('express');
const uutisetController = require('../controllers/uutisetController.js');

// luodaan tänne reititys users resurssille
const router = express.Router();

//  USER-endpointit
router.get('/', uutisetController.getAll);



module.exports = router;