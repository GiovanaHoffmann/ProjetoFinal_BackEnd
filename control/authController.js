const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = require('../config/auth');
const Usuario = require('../models/Usuario');
const Funcionario = require('../models/funcionario');
const Gerente = require('../models/gerente');

exports.login = async (req, res) => {
  try {
    const { email, senha, userType } = req.body;

    let model;
    if (userType === 'usuario') {
      model = Usuario;
    } else if (userType === 'funcionario') {
      model = Funcionario;
    } else if (userType === 'gerente') {
      model = Gerente;
    } else {
      return res.status(400).json({ error: 'Tipo de usuário inválido' });
    }

    const usuario = await model.findOne({ where: { email } });

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: usuario.id, userType }, secretKey);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};

