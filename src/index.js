const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes
app.use('/api', routes);

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Define HTML endpoint for production build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
