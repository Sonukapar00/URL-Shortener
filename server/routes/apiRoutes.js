const express = require('express');
const router = express.Router();
const { validateUrl } = require('../middlewares/validateUrl');
const { getShortUrls, createShortUrl, deleteShortUrl } = require('../controllers/urlController');

router.get('/shorturls', getShortUrls);
router.post('/shorturls', validateUrl, createShortUrl);
router.delete('/shorturls/:id', deleteShortUrl);

module.exports = router;
