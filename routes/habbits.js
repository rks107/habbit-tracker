const express = require('express');
const router = express.Router();
const habbitController = require('../controllers/habbit_controller');

router.get('/habbits', habbitController.habbit);


module.exports = router;