//const { Sequelize, sequelize } = require('C:.\ProjetoFinal_BackEnd\app.js');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
    acessoSetor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  Funcionario.belongsTo(Usuario); // Relacionamento entre Funcionário e Usuário

  module.exports = Funcionario;