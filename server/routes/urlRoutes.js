const express = require('express');
const router = express.Router();
const { validateUrl } = require('../middlewares/validateUrl');
const {
  getDashboard,
  createShortUrl,
  redirectShortUrl,
  deleteShortUrl,
} = require('../controllers/urlController');

router.get('/', getDashboard);
router.post('/shorturls', validateUrl, createShortUrl);
router.get('/:shortCode', redirectShortUrl);
router.post('/delete/:id', deleteShortUrl);

module.exports = router;
