const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = require('../config/auth');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: usuario.id }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};

