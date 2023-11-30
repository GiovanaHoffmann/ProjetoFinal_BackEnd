const express = require('express');
const app = express();

const port = 3001;

const dotenv = require('dotenv').config;

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/estoque")
.then(async () => {
    console.log('Datbase conected!');
  }).catch(error => {
    console.error('Error connecting MongoDB:', error.message);
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})