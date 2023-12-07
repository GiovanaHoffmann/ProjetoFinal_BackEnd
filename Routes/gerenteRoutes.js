const express = require('express');
const router = express.Router();
const gerenteController = require('../control/gerenteController');

router.put('/estoque/:id', gerenteController.modificarEstoque);
router.put('/usuarios/:id', gerenteController.gerenciarUsuarios);

module.exports = router;
