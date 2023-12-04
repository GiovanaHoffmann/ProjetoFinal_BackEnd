const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    //
  });
  
  Cliente.belongsTo(Usuario); // Relacionamento

  module.exports = Cliente;

