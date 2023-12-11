const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const secretKey = require('../config/auth');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Busca o usuário no banco de dados usando o ID
    const user = await Usuario.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    // Retorna infos do perfil do usuário
    res.status(200).json({ profile: user });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter perfil do usuário' });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10); // Hash da senha com salt de 10 rounds

    const newUser = await Usuario.create({ nome, email, senha: hashedPassword });
    // Após o usuário ser criado com sucesso, gerar o token JWT
    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, secretKey, { expiresIn: '1h' });
    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Se as credenciais estiverem corretas, gerar o token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { nome, email, senha } = req.body;

    const user = await Usuario.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }

    await Usuario.update({ nome, email, senha }, { where: { id: userId } });

    res.status(200).json({ message: 'Detalhes do usuário atualizados' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Usuario.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }

    await Usuario.destroy({ where: { id: userId } });

    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
};