const express = require('express');
const projectControllers = require('../controllers/projectControllers');
const router = express.Router();

//  Do I even have to tell whats going on here?
router.get('/', projectControllers.getAllProjects);
router.post('/add/', projectControllers.AddProject);
router.get('/:_id', projectControllers.getProject);
router.patch("/:_id", projectControllers.updateProject);

module.exports = router;