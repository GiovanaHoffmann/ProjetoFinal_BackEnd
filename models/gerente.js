const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gerente = sequelize.define('Gerente', {
    //
  });
  
  Gerente.belongsTo(Usuario); // Relacionamento 

  module.exports = Gerente;