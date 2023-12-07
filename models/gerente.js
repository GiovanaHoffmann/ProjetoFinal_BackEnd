const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Gerente = sequelize.define('Gerente', {
  // Atributos do gerente, se necessário
});

Gerente.belongsTo(Usuario);

module.exports = Gerente;
