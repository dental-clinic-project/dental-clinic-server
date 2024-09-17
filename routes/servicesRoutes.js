const express = require('express');
const { getServices } = require('../controllers/servicesController');

const router = express.Router();

router.route('/').get(getServices);

module.exports = router;
