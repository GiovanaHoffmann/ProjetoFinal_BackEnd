const Product = require('../models/produto');

// novo produto
exports.createProduct = async (req, res) => {
  try {
    const { nome, artista, genero, ano_lancamento, tipo, preco } = req.body;
    const newProduct = await Product.create({
      nome,
      artista,
      genero,
      ano_lancamento,
      tipo,
      preco,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// listar produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// achar pela id
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// atualizar pela id
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { nome, artista, genero, ano_lancamento, tipo, preco } = req.body;

    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    await Product.update(
      { nome, artista, genero, ano_lancamento, tipo, preco },
      { where: { id: productId } }
    );
    res.status(200).json({ message: 'Produto atualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// excluir pela id
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }
    await Product.destroy({ where: { id: productId } });
    res.status(200).json({ message: 'Produto excluido' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

