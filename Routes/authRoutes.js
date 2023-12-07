const express = require('express');
const router = express.Router();
const AuthController = require('../control/authController');

// Rota para autenticação
router.post('/login', AuthController.login);

module.exports = router;
