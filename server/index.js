require('dotenv').config();
const express = require('express');
const path = require('path');
const connectMongoDB = require('./config/db');
const apiRoutes = require('./routes/apiRoutes');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const clientDist = path.resolve(__dirname, '../client/dist');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRoutes);
app.use(express.static(clientDist));
app.use('/', urlRoutes);

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.sendFile(path.join(clientDist, 'index.html'));
});

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/url-shortener';

connectMongoDB(mongoUri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Application startup failed:', error.message);
  });
