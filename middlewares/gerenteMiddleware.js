const Gerente = require('../models/gerente');

module.exports = async (req, res, next) => {
  const userId = req.user.userId; // Obtém o ID do usuário do token decodificado

  try {
    const gerente = await Gerente.findOne({ where: { UsuarioId: userId } });

    if (!gerente) {
      return res.status(403).json({ error: 'Acesso não autorizado para gerentes' });
    }

    //

    next(); // Permite que a solicitação continue para a rota associada
  } catch (error) {
    res.status(500).json({ error: 'Erro ao verificar permissões de gerente' });
  }
};
