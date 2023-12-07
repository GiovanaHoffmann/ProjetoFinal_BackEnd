const express = require('express');
const router = express.Router();
const funcionarioController = require('../control/funcionarioController');

router.get('/estoque', funcionarioController.listarEstoque);
router.put('/estoque/:id', funcionarioController.atualizarEstoque);


module.exports = router;
