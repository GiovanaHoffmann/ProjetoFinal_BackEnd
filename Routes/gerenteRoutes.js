const express = require('express');
const router = express.Router();
const gerenteController = require('../control/gerenteController');
const authMiddleware = require('../middlewares/authMiddleware');
const gerenteAuth = require('../middlewares/gerenteMiddleware');

router.use(authMiddleware); // Middleware de autenticação para todas as rotas de gerente
router.use(gerenteAuth); // Middleware de autorização para gerentes

router.get('/produtos', gerenteController.listarProdutos);
router.post('/produtos', gerenteController.criarProduto);
router.put('/produtos/:id', gerenteController.atualizarProduto);
router.delete('/produtos/:id', gerenteController.excluirProduto);
router.post('/criar', gerenteController.criarGerente);

router.post('/funcionarios', gerenteController.criarFuncionario);
router.delete('/funcionarios/:id', gerenteController.excluirFuncionario);

module.exports = router;

