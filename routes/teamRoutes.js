const express = require('express');
const { getTeam } = require('../controllers/teamController');
const router = express.Router();

router.route('/').get(getTeam);

module.exports = router;
