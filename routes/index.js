const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);


// for any router we are accesses them from here
router.use('/users', require('./users'));
router.use('/users', require('./habbits'));

module.exports = router;