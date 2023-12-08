const express = require('express');
const app = express();
const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');
const Funcionario = require('./models/funcionario');
const Gerente = require('./models/gerente');
const Produto = require('./models/produto');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/usuarioRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const gerenteRoutes = require('./routes/gerenteRoutes');
const productRoutes = require('./routes/produtoRoutes');
const install = require('./routes/installRoute');


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/gerentes', gerenteRoutes);
app.use('/products', productRoutes);
app.use('/install', install);


sequelize
  .authenticate()
  .then(() => {
    console.log('MySQL connected.');

    // Sincronize os modelos com o banco de dados
    sequelize.sync({ force: true }) // O uso de force: true irá forçar a criação das tabelas, cuidado com dados existentes
      .then(() => {
        console.log('Banco de dados sincronizado.');

        // Inicie o servidor após a sincronização bem-sucedida
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.error('Erro ao sincronizar o banco de dados:', err);
      });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });


//Servidor e banco de dados
 /*sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected.');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    return sequelize.query('CREATE DATABASE IF NOT EXISTS estoque;');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

  // Sincronização dos modelos com o banco de dados
sequelize.sync({ force: true }) // "force: true" irá forçar a criação das tabelas
.then(() => {
  console.log('Banco de dados sincronizado.');
})
.catch((err) => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});*/
