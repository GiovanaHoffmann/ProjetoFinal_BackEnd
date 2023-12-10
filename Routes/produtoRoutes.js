const express = require('express');
const router = express.Router();
const ProductController = require('../control/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

//Rotas sem autenticação
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
// Rotas com autenticação
router.use(authMiddleware); // Middleware de autenticação para outras rotas relacionadas a produtos
//Rotas com autenticação
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
