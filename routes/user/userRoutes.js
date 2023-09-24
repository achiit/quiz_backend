const express = require('express');
const UserController = require('../../controllers/user/userController');

const router = express.Router();

router.get('/questions', UserController.getAllUserQuestions);

module.exports = router;
