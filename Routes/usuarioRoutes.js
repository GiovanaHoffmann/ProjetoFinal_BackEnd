const express = require('express');
const router = express.Router();
const UserController = require('../control/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// Removendo autenticação para criação de usuários
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// Rotas com autenticação
router.use(authMiddleware); // Middleware de autenticação para outras rotas relacionadas a usuários

// Rotas com autenticação
router.get('/profile', UserController.getUserProfile);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
