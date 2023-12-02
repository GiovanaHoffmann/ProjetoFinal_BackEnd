const express = require('express');
const app = express();

const dotenv = require('dotenv').config();

const PORT = process.env.PORT;

const Sequelize = require('sequelize');
const sequelize = new 
Sequelize(process.env.MYSQL_LINK);

 sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected.');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    return sequelize.query('CREATE DATABASE IF NOT EXISTS estoque;');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

  module.exports = { Sequelize, sequelize };