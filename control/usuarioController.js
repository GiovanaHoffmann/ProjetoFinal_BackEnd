const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

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
    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: 'Credenciais inválidas' });
      return;
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      res.status(401).json({ message: 'Credenciais inválidas' });
      return;
    }

    res.status(200).json({ message: 'Login bem-sucedido' });
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