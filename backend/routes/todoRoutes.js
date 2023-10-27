const express = require('express');
const todoController = require('../controllers/todoControllers.js');

// luodaan tänne reititys users resurssille
const router = express.Router();

//  USER-endpointit
router.get('/', todoController.getTodoItems);
router.post('/add', todoController.addTodoItem);


module.exports = router;