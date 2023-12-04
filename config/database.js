const Sequelize = require('sequelize');
const sequelize = new 
Sequelize(process.env.MYSQL_LINK);

const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('MySQL connected.');
      
      await sequelize.query('CREATE DATABASE IF NOT EXISTS estoque;');
      console.log('Database created or already exists.');
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  };
  
  connectToDatabase();
  
  module.exports = sequelize;