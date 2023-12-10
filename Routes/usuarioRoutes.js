const express = require('express');
const router = express.Router();
const UserController = require('../control/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); //middleware de autenticação para todas as rotas de usuário

//rota para obter perfil de usuário
router.get('/profile', UserController.getUserProfile);
//rotas para CRUD de usuários
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
