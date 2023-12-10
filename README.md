### **Funcionalidades e Estrutura do Projeto:**

- **Autenticação:** Utiliza JWT para autenticação de usuários.
- **Banco de Dados:** Usa Sequelize para interagir com um banco de dados MySQL.
- **Modelos:** Define modelos para usuários (comum, funcionário, gerente) e produtos.
- **Rotas:** Define rotas para diferentes tipos de usuários (authRoutes, usuarioRoutes, funcionarioRoutes, gerenteRoutes, produtoRoutes e installRoute).
- **Controladores:** Lógica para lidar com solicitações nas rotas.
- **Middlewares:** Middlewares para autenticação e autorização de diferentes tipos de usuários.
