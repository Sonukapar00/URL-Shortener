const express = require('express');
const router = express.Router();
const { redirectShortUrl } = require('../controllers/urlController');

router.get('/:shortCode', redirectShortUrl);

module.exports = router;
