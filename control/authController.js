const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = require('../config/auth');
const Usuario = require('../models/Usuario');
const Funcionario = require('../models/funcionario');
const Gerente = require('../models/gerente');

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Encontrar o usuário pelo email
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: usuario.id, userType: usuario.tipo }, secretKey);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};

