const express = require('express');
const testControllers = require('../controllers/test-controllers.js');

const router = express.Router();

router.get('/', testControllers.getHelloWorld);

module.exports = router;