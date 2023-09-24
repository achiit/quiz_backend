const express = require('express');
const AdminController = require('../../controllers/admin/adminController');

const router = express.Router();

router.post('/questions', AdminController.addQuestion);

module.exports = router;
