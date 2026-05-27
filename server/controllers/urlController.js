const Url = require('../models/Url');

const getShortUrls = async (req, res) => {
  try {
    const shortUrls = await Url.find().sort({ createdAt: -1 });
    return res.json(shortUrls);
  } catch (error) {
    console.error('Error fetching short URLs:', error);
    return res.status(500).json({ message: 'Failed to fetch URLs', error: error.message });
  }
};

const createShortUrl = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const fullUrl = req.body.fullUrl?.trim();
    if (!fullUrl) {
      return res.status(400).json({ message: 'A valid URL is required.' });
    }

    const newUrl = await Url.create({ fullUrl });
    return res.status(201).json(newUrl);
  } catch (error) {
    console.error('Error creating short URL:', error);
    return res.status(500).json({ message: 'Failed to create short URL', error: error.message });
  }
};

const redirectShortUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    console.log(`Redirect request received for shortCode=${shortCode}`);

    const shortUrl = await Url.findOne({ shortCode });
    if (!shortUrl) {
      console.warn(`Short URL not found for code=${shortCode}`);
      // Redirect to root (will serve frontend) when not found
      return res.redirect('/');
    }

    shortUrl.clicks = (shortUrl.clicks || 0) + 1;
    await shortUrl.save();

    console.log(`Redirecting to ${shortUrl.fullUrl} (code=${shortCode})`);
    return res.redirect(shortUrl.fullUrl);
  } catch (error) {
    console.error('Error during redirect:', error);
    // On error, safely redirect to root
    return res.redirect('/');
  }
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
