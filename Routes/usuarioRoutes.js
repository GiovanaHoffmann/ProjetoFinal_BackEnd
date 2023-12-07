const express = require('express');
const router = express.Router();
const UserController = require('../control/usuarioController');

// Rotas para CRUD de usuários
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
