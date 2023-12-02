const { Sequelize, sequelize } = require('C:.\ProjetoFinal_BackEnd\app.js');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Arquivo: models/Funcionario.js
const Funcionario = sequelize.define('Funcionario', {
  acessoSetor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Funcionario.belongsTo(Usuario); // Relacionamento entre Funcionário e Usuário

// Arquivo: models/Produto.js
const Produto = sequelize.define('Produto', {
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

// Implementação das relações entre as entidades (exemplo de relação entre Funcionário e Produto):
Funcionario.hasMany(Produto, { as: 'estoque', foreignKey: 'FuncionarioId' });
Produto.belongsTo(Funcionario);

// Restante do código para configurar o servidor Express, rotas, controladores, etc.
// ...
