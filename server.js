const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(routes);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
