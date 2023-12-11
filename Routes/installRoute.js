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
        setor: 'DVD' 
      },
      { 
        nome: 'Funcionario2',
        email: 'funcionario2@funcionario.com',
        senha: 'senha456',
        setor: 'CD' 
      },
      { 
        nome: 'Funcionario3',
        email: 'funcionario3@funcionario.com',
        senha: 'senha789',
        setor: 'vinil' 
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
      { nome: 'Taylor Swift', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2006, preco: 10.99, formato: 'CD' },
      { nome: 'Fearless', artista: 'Taylor Swift', genero: 'Country', anoLancamento: 2008, preco: 12.99, formato: 'DVD' },
      { nome: 'Speak Now', artista: 'Taylor Swift', genero: 'Country pop', anoLancamento: 2010, preco: 10.99, formato: 'vinil' },
      { nome: 'Red', artista: 'Taylor Swift', genero: 'Pop, pop rock', anoLancamento: 2012, preco: 12.99, formato: 'DVD' },
      { nome: '1989', artista: 'Taylor Swift', genero: 'Synth-pop', anoLancamento: 2014, preco: 10.99, formato: 'vinil' },
      { nome: 'Reputation', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2017, preco: 12.99, formato: 'CD' },
      { nome: 'Lover', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2019, preco: 10.99, formato: 'vinil' },
      { nome: 'Folklore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 12.99, formato: 'DVD' },
      { nome: 'Evermore', artista: 'Taylor Swift', genero: 'folk', anoLancamento: 2020, preco: 10.99, formato: 'CD' },
      { nome: 'Midnights', artista: 'Taylor Swift', genero: 'pop', anoLancamento: 2022, preco: 12.99, formato: 'DVD' },
      { nome: 'Bangerz', artista: 'Miley Cyrus', genero: 'Pop', anoLancamento: 2013, preco: 12.99, formato: 'CD' },
      { nome: 'She Is Coming', artista: 'Miley Cyrus', genero: 'Pop', anoLancamento: 2019, preco: 13.99, formato: 'DVD' },
      { nome: 'Plastic Hearts', artista: 'Miley Cyrus', genero: 'Rock', anoLancamento: 2020, preco: 14.99, formato: 'vinil' },
      { nome: 'Bangerz Tour', artista: 'Miley Cyrus', genero: 'Pop', anoLancamento: 2014, preco: 13.99, formato: 'CD' },
      { nome: 'The Fame', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2008, preco: 11.99, formato: 'CD' },
      { nome: 'Born This Way', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2011, preco: 12.99, formato: 'DVD' },
      { nome: 'Artpop', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2013, preco: 13.99, formato: 'vinil' },
      { nome: 'Joanne', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2016, preco: 12.99, formato: 'CD' },
      { nome: 'Chromatica', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2020, preco: 14.99, formato: 'CD' },
      { nome: 'The Remix', artista: 'Lady Gaga', genero: 'Pop', anoLancamento: 2010, preco: 12.99, formato: 'DVD' },
      { nome: 'Recovery', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2010, preco: 12.99, formato: 'CD' },
      { nome: 'The Marshall Mathers LP 2', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2013, preco: 13.99, formato: 'vinil' },
      { nome: 'Kamikaze', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2018, preco: 14.99, formato: 'DVD' },
      { nome: 'Revival', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2017, preco: 13.99, formato: 'CD' },
      { nome: 'Music to Be Murdered By', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2020, preco: 14.99, formato: 'vinil' },
      { nome: 'The Slim Shady LP', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 1999, preco: 11.99, formato: 'DVD' },
      { nome: 'Relapse', artista: 'Eminem', genero: 'Hip Hop', anoLancamento: 2009, preco: 12.99, formato: 'CD' },
      { nome: 'Beyoncé', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2013, preco: 13.99, formato: 'vinil' },
      { nome: 'Lemonade', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2016, preco: 14.99, formato: 'DVD' },
      { nome: '4', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2011, preco: 11.99, formato: 'CD' },
      { nome: 'I Am... Sasha Fierce', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2008, preco: 12.99, formato: 'CD' },
      { nome: 'Dangerously in Love', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2003, preco: 10.99, formato: 'vinil' },
      { nome: 'Homecoming: The Live Album', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2019, preco: 14.99, formato: 'CD' },
      { nome: 'The Lion King: The Gift', artista: 'Beyoncé', genero: 'R&B', anoLancamento: 2019, preco: 13.99, formato: 'vinil' }
    ]);

    res.status(200).json({ message: 'Perfis criados e Banco de dados instalado e populado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao popular o banco de dados e crias perfis.' });
  }
});

module.exports = router;

