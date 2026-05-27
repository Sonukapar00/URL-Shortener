const Url = require('../models/Url');

const getDashboard = async (req, res) => {
  const shortUrls = await Url.find().sort({ createdAt: -1 });
  res.render('index', { shortUrls });
};

const createShortUrl = async (req, res) => {
  const fullUrl = req.body.fullUrl?.trim();
  if (!fullUrl) {
    return res.status(400).send('A valid URL is required.');
  }

  await Url.create({ fullUrl });
  res.redirect('/');
};

const redirectShortUrl = async (req, res) => {
  const shortUrl = await Url.findOne({ shortCode: req.params.shortCode });
  if (!shortUrl) {
    return res.status(404).send('Short URL not found');
  }

  shortUrl.clicks += 1;
  await shortUrl.save();

  res.redirect(shortUrl.fullUrl);
};

const deleteShortUrl = async (req, res) => {
  const shortUrl = await Url.findByIdAndDelete(req.params.id);
  if (!shortUrl) {
    return res.status(404).send('Link not found.');
  }

  res.redirect('/');
};

module.exports = {
  getDashboard,
  createShortUrl,
  redirectShortUrl,
  deleteShortUrl,
};
