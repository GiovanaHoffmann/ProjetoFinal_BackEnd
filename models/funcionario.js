//const { Sequelize, sequelize } = require('C:.\ProjetoFinal_BackEnd\app.js');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Funcionario = sequelize.define('Funcionario', {
  setor: {
    type: DataTypes.ENUM('DVD', 'CD', 'vinil'),
    allowNull: false,
  },
});

Funcionario.belongsTo(Usuario);

module.exports = Funcionario;
