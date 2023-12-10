const express = require('express');
const router = express.Router();
const funcionarioController = require('../control/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const funcionarioAuth = require('../middlewares/funcionarioMiddleware');

router.use(authMiddleware); // Middleware de autenticação para todas as rotas de funcionário
router.use(funcionarioAuth); // Middleware de autorização para funcionários

router.get('/estoque', funcionarioController.listarEstoque);
router.post('/estoque', funcionarioController.criarEstoque);
router.put('/estoque/:id', funcionarioController.atualizarEstoque);
router.delete('/estoque/:id', funcionarioController.excluirEstoque);

module.exports = router;


