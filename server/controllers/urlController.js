const Url = require('../models/Url');

const getShortUrls = async (req, res) => {
  const shortUrls = await Url.find().sort({ createdAt: -1 });
  res.json(shortUrls);
};

const createShortUrl = async (req, res) => {
  const fullUrl = req.body.fullUrl?.trim();
  if (!fullUrl) {
    return res.status(400).json({ message: 'A valid URL is required.' });
  }

  const newUrl = await Url.create({ fullUrl });
  res.status(201).json(newUrl);
};

const redirectShortUrl = async (req, res) => {
  const shortUrl = await Url.findOne({ shortCode: req.params.shortCode });
  if (!shortUrl) {
    return res.status(404).json({ message: 'Short URL not found' });
  }

  shortUrl.clicks += 1;
  await shortUrl.save();

  res.redirect(shortUrl.fullUrl);
};

const deleteShortUrl = async (req, res) => {
  const shortUrl = await Url.findByIdAndDelete(req.params.id);
  if (!shortUrl) {
    return res.status(404).json({ message: 'Link not found.' });
  }

  res.json({ message: 'Link deleted successfully.' });
};

module.exports = {
  getShortUrls,
  createShortUrl,
  redirectShortUrl,
  deleteShortUrl,
};
