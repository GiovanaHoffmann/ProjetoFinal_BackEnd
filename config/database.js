const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new 
Sequelize(process.env.MYSQL_LINK);
  
  module.exports = sequelize;