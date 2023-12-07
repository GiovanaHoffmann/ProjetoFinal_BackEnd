const express = require('express');
const router = express.Router();
const Product = require('../models/produto');

router.get('/', async (req, res) => {
  try {
    //await Product.sync({ force: true }); 
    await Product.sync();

    // Popula as tabelas/coleções com alguns registros
    await Product.bulkCreate([
      { nome: 'Taylor Swift', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2006, preco: 10.99, tipo: 'cd' },
      { nome: 'Fearless', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2008, preco: 12.99, tipo: 'dvd' },
      { nome: 'Speak Now', artista: 'Taylor Swift', genero: 'Country pop', anoLancamento: 2010, preco: 10.99, tipo: 'vinil' },
      { nome: 'Red', artista: 'Taylor Swift', genero: 'Pop, pop rock', anoLancamento: 2012, preco: 12.99, tipo: 'dvd' },
      { nome: '1989', artista: 'Taylor Swift', genero: 'Synth-pop', anoLancamento: 2014, preco: 10.99, tipo: 'vinil' },
      { nome: 'Reputation', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2017, preco: 12.99, tipo: 'cd' },
      { nome: 'Lover', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2019, preco: 10.99, tipo: 'vinil' },
      { nome: 'Folklore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 12.99, tipo: 'dvd' },
      { nome: 'Evermore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 10.99, tipo: 'cd' },
      { nome: 'Midnights', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2022, preco: 12.99, tipo: 'dvd' },
    ]);

    res.status(200).json({ message: 'Banco de dados instalado e populado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao popular o banco de dados.' });
  }
});

module.exports = router;

