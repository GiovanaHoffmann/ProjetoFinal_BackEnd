
/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Obter o perfil do usuário logado
 *     description: Endpoint para obter o perfil do usuário logado
 *     responses:
 *       200:
 *         description: Perfil do usuário retornado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao obter perfil do usuário
 */


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     description: Endpoint para registrar um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       500:
 *         description: Erro ao criar usuário
 */  


/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login do usuário
 *     description: Endpoint para fazer login como usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro ao fazer login
 */


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário específico
 *     description: Endpoint para atualizar um usuário específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Detalhes do usuário atualizados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar usuário
 */


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Excluir um usuário específico
 *     description: Endpoint para excluir um usuário específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao excluir usuário
 */


/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Criar um novo funcionário
 *     description: Endpoint para criar novos funcionários (com autorização)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               setor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Funcionário criado com sucesso
 *       # Adicione outras respostas conforme necessário
 */

/**
 * @swagger
 * /funcionario/login:
 *   post:
 *     summary: Login do funcionário
 *     description: Endpoint para fazer login como funcionário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro ao fazer login
 */

/**
 * @swagger
 * /funcionarios/estoque:
 *   get:
 *     summary: Listar produtos no estoque
 *     description: Endpoint para listar produtos no estoque (com autorização)
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *       # Adicione outras respostas conforme necessário
 *   post:
 *     summary: Criar um novo produto no estoque
 *     description: Endpoint para criar novos produtos no estoque (com autorização)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               quantidade:
 *                 type: integer
 *               preço:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produto criado com sucesso
 *       # Adicione outras respostas conforme necessário
 *     # Adicione outros métodos (PUT, DELETE) conforme necessário para atualizar e excluir produtos
 */


/**
 * @swagger
 * /gerente/login:
 *   post:
 *     summary: Login do gerente
 *     description: Endpoint para fazer login como gerente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       404:
 *         description: Gerente não encontrado
 *       500:
 *         description: Erro ao fazer login
 */


/**
 * @swagger
 * /gerentes/produtos:
 *   get:
 *     summary: Listar todos os produtos
 *     description: Endpoint para listar todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       500:
 *         description: Erro ao listar os produtos
 *   
 *   post:
 *     summary: Criar um novo produto
 *     description: Endpoint para criar um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Incluir propriedades do produto aqui
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       500:
 *         description: Erro ao criar produto
 */

 /**
 *@swagger
 * /gerentes/produtos/{id}:
 *   put:
 *     summary: Atualizar um produto
 *     description: Endpoint para atualizar um produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Incluir propriedades do produto aqui
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao atualizar produto
 */

/**
 *@swagger
 * /gerentes/produtos/{id}:
 *   delete:
 *     summary: Excluir um produto
 *     description: Endpoint para excluir um produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto excluído
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao excluir produto
 */


/**
 *@swagger
 * /gerentes/funcionarios:
 *   post:
 *     summary: Criar um novo funcionário
 *     description: Endpoint para criar um novo funcionário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Incluir propriedades do funcionário aqui
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 *       500:
 *         description: Erro ao criar funcionário
 */   


/**
 *@swagger
 * /gerentes/funcionarios/{id}:
 *   delete:
 *     summary: Excluir um funcionário
 *     description: Endpoint para excluir um funcionário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário excluído com sucesso
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro ao excluir funcionário
 */

 /**
 *@swagger
 * /gerentes/criar:
 *   post:
 *     summary: Criar um novo gerente
 *     description: Endpoint para criar um novo gerente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Incluir propriedades do gerente aqui
 *     responses:
 *       201:
 *         description: Gerente criado com sucesso
 *       500:
 *         description: Erro ao criar gerente
 */

 /**
 * @swagger
 * /products:
 *   get:
 *     summary: Obter todos os produtos com paginação
 *     description: Endpoint para obter todos os produtos com paginação
 *     parameters:
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *         required: true
 *         description: Quantidade de produtos por página (5, 10 ou 30)
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *         required: true
 *         description: Página desejada para a listagem
 *     responses:
 *       200:
 *         description: Lista de produtos obtida com sucesso
 *       400:
 *         description: Limite inválido
 *       500:
 *         description: Erro ao obter a lista de produtos

 *   get:
 *     summary: Obter um produto por ID
 *     description: Endpoint para obter um produto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: ID do produto a ser obtido
 *     responses:
 *       200:
 *         description: Produto obtido com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro ao obter o produto por ID
 */
