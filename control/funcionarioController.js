const Funcionario = require('../models/funcionario');
const Usuario = require('../models/Usuario');


exports.atualizarEstoque = async (req, res) => {
  try {
    const userId = req.user.userId;
    const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });

    if (!funcionario) {
      return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
    }

    const setorAcesso = funcionario.acessoSetor; 

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

    const setorAcesso = funcionario.acessoSetor; // Obtém o setor de acesso do funcionário

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
      tipo,
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

    const setorAcesso = funcionario.acessoSetor; // Obtém o setor de acesso do funcionário

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

    const setorAcesso = funcionario.acessoSetor; // Obtém o setor de acesso do funcionário

    const produtos = await Produto.findAll({ where: { tipo: setorAcesso } });

    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar o estoque' });
  }
};