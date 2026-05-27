const isValidUrl = (value) => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch (err) {
    return false;
  }
};

const validateUrl = (req, res, next) => {
  const url = req.body.fullUrl?.trim();
  if (!isValidUrl(url)) {
    return res.status(400).send('Please provide a valid URL starting with http:// or https://');
  }
  next();
};

module.exports = { validateUrl };
