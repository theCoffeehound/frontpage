const express = require('express');
const uutisetController = require('../controllers/uutisetController.js');

const router = express.Router();

router.get('/', uutisetController.getAll);


module.exports = router;