const express = require('express');
const router = express.Router();
const { submitReferral } = require('../controllers/referralController');

router.post('/referral', submitReferral);

module.exports = router;
