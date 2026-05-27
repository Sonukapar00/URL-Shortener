require('dotenv').config();
const express = require('express');
const path = require('path');
const connectMongoDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', urlRoutes);

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
