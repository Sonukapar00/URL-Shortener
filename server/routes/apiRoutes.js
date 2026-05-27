const express = require('express');
const router = express.Router();
const { validateUrl } = require('../middlewares/validateUrl');
const { getShortUrls, createShortUrl, deleteShortUrl } = require('../controllers/urlController');

router.get('/', getShortUrls);
router.post('/', validateUrl, createShortUrl);
router.delete('/:id', deleteShortUrl);

module.exports = router;
