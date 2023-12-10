const express = require('express');
const app = express();
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configurações do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Gestão de Estoque de uma loja de discos',
      description: 'Documentação da API de Gestão de Estoque de uma loja de discos',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos de definição Swagger
};

// Geração da documentação Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Rota para exibir a documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

    // Sincronização dos modelos com o banco de dados
    sequelize.sync({ force: true }) // "force: true" - força a criação das tabelas.
      .then(() => {
        console.log('Banco de dados sincronizado.');

        // Inicialização do servidor
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.error('Erro ao sincronizar o banco de dados:', err);
      });
  })
  .catch((err) => {
    console.error('Erro ao ao conectar com a base de dados:', err);
  });

