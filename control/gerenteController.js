const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = require('../config/auth');
const Produto = require('../models/produto');
const Funcionario = require('../models/funcionario');
const Gerente = require('../models/gerente');

// Métodos para CRUD de produtos
exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os produtos' });
  }
};

exports.criarProduto = async (req, res) => {
  try {
    const novoProduto = req.body;
    const produtoCriado = await Produto.create(novoProduto);
    res.status(201).json({ message: 'Produto criado com sucesso', produto: produtoCriado });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Produto.update(dadosAtualizados, { where: { id } });

    res.status(200).json({ message: 'Produto atualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.excluirProduto = async (req, res) => {
  try {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Produto.destroy({ where: { id } });

    res.status(200).json({ message: 'Produto excluído' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};

// Métodos para CRUD de funcionários
exports.criarFuncionario = async (req, res) => {
  try {
    const { setor, UsuarioId } = req.body;
    const novoFuncionario = await Funcionario.create({ setor, UsuarioId });
    res.status(201).json({ message: 'Funcionário criado com sucesso', funcionario: novoFuncionario });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar funcionário' });
  }
};

exports.excluirFuncionario = async (req, res) => {
  try {
    const { id } = req.params;

    const funcionario = await Funcionario.findByPk(id);
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    await Funcionario.destroy({ where: { id } });

    res.status(200).json({ message: 'Funcionário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir funcionário' });
  }
};

exports.criarGerente = async (req, res) => {
  try {
    const { UsuarioId } = req.body;
    const novoGerente = await Gerente.create({ UsuarioId });
    res.status(201).json({ message: 'Gerente criado com sucesso', gerente: novoGerente });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar gerente' });
  }
};

exports.loginGerente = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const gerente = await Gerente.findOne({ email });

    if (!gerente) {
      return res.status(404).json({ error: 'Gerente não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(senha, gerente.senha);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Se as credenciais estiverem corretas, gerar o token JWT
    const token = jwt.sign({ gerenteId: gerente.id, email: gerente.email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};