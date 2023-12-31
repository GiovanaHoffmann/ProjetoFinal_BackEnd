const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Funcionario = require('../models/funcionario');
const secretKey = require('../config/auth');
const Usuario = require('../models/Usuario');
const Produto = require('../models/produto');

exports.criarFuncionario = async (req, res) => {
  try {
    const { setor, UsuarioId } = req.body;
    const novoFuncionario = await Funcionario.create({ setor, UsuarioId });
    res.status(201).json({ message: 'Funcionário criado com sucesso', funcionario: novoFuncionario });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar funcionário' });
  }
};

exports.loginFuncionario = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const funcionario = await Funcionario.findOne({ email });

    if (!funcionario) {
      return res.status(404).json({ error: 'Funcionário não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(senha, funcionario.senha);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ funcionarioId: funcionario.id, email: funcionario.email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

exports.atualizarEstoque = async (req, res) => {
  try {
    const userId = req.user.userId;
    const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });

    if (!funcionario) {
      return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
    }

    const setorAcesso = funcionario.setor; 

    const productId = req.params.id;
    const produto = await Produto.findByPk(productId);
    
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    if (produto.tipo !== setorAcesso) {
      return res.status(403).json({ error: 'Você não tem permissão para alterar este produto' });
    }

    const { nome, artista, genero, anoLancamento, preco } = req.body;
    await Produto.update(
      { nome, artista, genero, anoLancamento, preco },
      { where: { id: productId } }
    );

    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
};

exports.criarEstoque = async (req, res) => {
  try {
    const userId = req.user.userId;
    const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });

    if (!funcionario) {
      return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
    }

    const setorAcesso = funcionario.setor; // Obtém o setor de acesso do funcionário

    // Verificar se o tipo do novo produto é o mesmo do setor de acesso do funcionário
    const { nome, artista, genero, anoLancamento, preco, tipo } = req.body;
    if (tipo !== setorAcesso) {
      return res.status(403).json({ error: 'Você não tem permissão para criar este tipo de produto' });
    }

    const newProduct = await Produto.create({
      nome,
      artista,
      genero,
      anoLancamento,
      preco,
      formato,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
};

exports.excluirEstoque = async (req, res) => {
  try {
    const userId = req.user.userId;
    const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });

    if (!funcionario) {
      return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
    }

    const setorAcesso = funcionario.setor; // Obtém o setor de acesso do funcionário

    const productId = req.params.id;
    const produto = await Produto.findByPk(productId);
    
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    if (produto.tipo !== setorAcesso) {
      return res.status(403).json({ error: 'Você não tem permissão para excluir este produto' });
    }

    await Produto.destroy({ where: { id: productId } });

    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o produto' });
  }
};

exports.listarEstoque = async (req, res) => {
  try {
    const userId = req.user.userId;
    const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });

    if (!funcionario) {
      return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
    }

    const setorAcesso = funcionario.setor; // Obtém o setor de acesso do funcionário

    const produtos = await Produto.findAll({ where: { tipo: setorAcesso } });

    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar o estoque' });
  }
};