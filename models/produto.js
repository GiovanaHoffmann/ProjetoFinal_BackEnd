//const { Sequelize, sequelize } = require('C:.\ProjetoFinal_BackEnd\app.js');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Funcionario = require('./funcionario');

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
    formato: {
      type: DataTypes.ENUM('vinil', 'dvd', 'cd'),
      allowNull: false,
    },
  });
  

Produto.belongsTo(Funcionario);
Funcionario.hasMany(Produto);

module.exports = Produto;