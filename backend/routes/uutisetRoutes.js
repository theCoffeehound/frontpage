const express = require('express');
const fs = require('fs');
const path = require('path');
const uutisetController = require('../controllers/uutisetController.js');

// luodaan tänne reititys users resurssille
const router = express.Router();

//  USER-endpointit
// router.get('/', uutisetController.getAll);
router.get('/100.json?app_id="' + process.env.app_id + "&" + "app_key=" + process.env.app_key, );


module.exports = router;