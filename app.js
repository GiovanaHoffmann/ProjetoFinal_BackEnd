const express = require('express');
const app = express();
const sequelize = require('./config/database');

const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

// Configurações do Express, Middlewares e Body Parser
app.use(express.json());

//rotas
app.use('/products', require('./routes/produtoRoutes'));


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
