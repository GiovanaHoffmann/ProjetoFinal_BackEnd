//const { Sequelize, sequelize } = require('C:.\ProjetoFinal_BackEnd\app.js');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Funcionario = require('../models/funcionario');

const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artista: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anoLancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM('album', 'dvd', 'cd'),
      allowNull: false,
    },
  });
  

Funcionario.hasMany(Produto, { as: 'estoque', foreignKey: 'FuncionarioId' });
Produto.belongsTo(Funcionario);

module.exports = Produto;