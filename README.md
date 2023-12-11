### **Proposta do projeto:** 
**Trata-se de uma API de gerenciamento de estoque de uma loja de discos. Usuários comuns podem ter acesso às informações 
dos produtos. Funcionários e gerentes podem realizar modificações (CRUD) nos produtos**
### **Funcionalidades e Estrutura do Projeto:**

- **Autenticação:** Utiliza JWT para autenticação de usuários.
- **Banco de Dados:** Usa Sequelize para interagir com um banco de dados MySQL.
- **Modelos:** Define modelos para usuários (comum, funcionário, gerente) e produtos.
- **Rotas:** Define rotas para diferentes tipos de usuários (authRoutes, usuarioRoutes, funcionarioRoutes, gerenteRoutes, produtoRoutes e installRoute).
- **Controladores:** Lógica para lidar com solicitações nas rotas.
- **Middlewares:** Middlewares para autenticação e autorização de diferentes tipos de usuários.
- **Regra de negócio:** Caso a data atual tenha dia e mês iguais (ex: 12/12, 06/06, 09/09), os preços são mostrados com 10% de desconto.
