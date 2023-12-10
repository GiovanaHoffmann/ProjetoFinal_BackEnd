const express = require('express');
const router = express.Router();
const Product = require('../models/produto');
const Usuario = require('../models/Usuario');
const Funcionario = require('../models/funcionario');
const Gerente = require('../models/gerente');

router.get('/', async (req, res) => {
  try {
    await Funcionario.bulkCreate([
      { 
        nome: 'Funcionario1',
        email: 'funcionario1@funcionario.com',
        senha: 'senha123',
      },
      { 
        nome: 'Funcionario2',
        email: 'funcionario2@funcionario.com',
        senha: 'senha456',
      },
      { 
        nome: 'Funcionario3',
        email: 'funcionario3@funcionario.com',
        senha: 'senha789',
      }
    ]);

     // Criação do gerente padrão
     const novoUsuarioAdmin = await Gerente.create({
      nome: 'Admin',
      email: 'admin@gerente.com',
      senha: 'admin123',
      isAdmin: true,
    });

    //const novoGerente = await Gerente.create({ UsuarioId: novoUsuarioAdmin.id });

    await Gerente.create({});
    await Product.sync({ force: true });
    await Product.bulkCreate([
      { nome: 'Taylor Swift', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2006, preco: 10.99, formato: 'cd' },
      { nome: 'Fearless', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2008, preco: 12.99, formato: 'dvd' },
      { nome: 'Speak Now', artista: 'Taylor Swift', genero: 'Country pop', anoLancamento: 2010, preco: 10.99, formato: 'vinil' },
      { nome: 'Red', artista: 'Taylor Swift', genero: 'Pop, pop rock', anoLancamento: 2012, preco: 12.99, formato: 'dvd' },
      { nome: '1989', artista: 'Taylor Swift', genero: 'Synth-pop', anoLancamento: 2014, preco: 10.99, formato: 'vinil' },
      { nome: 'Reputation', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2017, preco: 12.99, formato: 'cd' },
      { nome: 'Lover', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2019, preco: 10.99, formato: 'vinil' },
      { nome: 'Folklore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 12.99, formato: 'dvd' },
      { nome: 'Evermore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 10.99, formato: 'cd' },
      { nome: 'Midnights', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2022, preco: 12.99, formato: 'dvd' },
    ]);

    res.status(200).json({ message: 'Perfis criados e Banco de dados instalado e populado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao popular o banco de dados e crias perfis.' });
  }
});

module.exports = router;

