const express = require('express');
const router = express.Router();
const funcionarioController = require('../control/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const funcionarioAuth = require('../middlewares/funcionarioMiddleware');

// Removendo autenticação para a criação de funcionários
router.post('/funcionarios', funcionarioController.criarFuncionario);

router.use(authMiddleware); // Middleware de autenticação para outras rotas de funcionários
router.use(funcionarioAuth); // Middleware de autorização para funcionários

// Rotas com autenticação
router.get('/estoque', funcionarioController.listarEstoque);
router.post('/estoque', funcionarioController.criarEstoque);
router.put('/estoque/:id', funcionarioController.atualizarEstoque);
router.delete('/estoque/:id', funcionarioController.excluirEstoque);

module.exports = router;


