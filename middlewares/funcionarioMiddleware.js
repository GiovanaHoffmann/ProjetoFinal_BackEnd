const Funcionario = require('../models/funcionario');

module.exports = async (req, res, next) => {
    const userId = req.user.userId;
  
    try {
      const funcionario = await Funcionario.findOne({ where: { UsuarioId: userId } });
  
      if (!funcionario) {
        return res.status(403).json({ error: 'Acesso não autorizado para funcionários' });
      }
  
      const setorAcesso = funcionario.setor; // Obtém o setor de acesso do funcionário
  
      // Verifica se o funcionário pode acessar o estoque com base no setor
      if (setorAcesso === 'DVD' || setorAcesso === 'CD' || setorAcesso === 'vinil') {
        next(); // Permite acesso ao estoque para o setor específico
      } else {
        return res.status(403).json({ error: 'Acesso não autorizado para este setor' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao verificar permissões de funcionário' });
    }
  };
  