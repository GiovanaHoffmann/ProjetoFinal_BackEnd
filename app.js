const express = require('express');
const app = express();

const dotenv = require('dotenv').config();

const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_LINK)      
.then(async () => {
    console.log('Database conected!');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
  }).catch(error => {
    console.error('Error connecting MongoDB:', error.message);
  });

