## Endpoints da aplicação:

1. **Autenticação:**
    - **`/auth/login`** - Para fazer login e obter um token JWT.
2. **Usuários:**
    - **`/users/register`** - Para registrar novos usuários.
    - **`/users/login`** - Para fazer login como usuário.
    - **`/users/profile`** - Para obter o perfil do usuário logado.
    - **`/users/:id`** - Para atualizar ou excluir um usuário específico.
3. **Funcionários:**
    - **`/funcionarios`** - Para criar novos funcionários (com autorização).
    - **`/funcionarios/estoque`** - Para listar, criar, atualizar e excluir produtos no estoque (com autorização).
4. **Gerentes:**
    - **`/gerentes/produtos`** - Para listar, criar, atualizar e excluir produtos (com autorização).
    - **`/gerentes/funcionarios`** - Para criar e excluir funcionários (com autorização).

Vou criar um roteiro de teste simples para alguns desses endpoints usando o Postman:

### **Roteiro de Teste:**

### Autenticação:

1. **Login:**
    - Método: **`POST`**
    - URL: **`http://localhost:3000/auth/login`**
    - Body:
        
        ```perl
        {
          "email": "seu_email@exemplo.com",
          "senha": "sua_senha"
        }
        
        ```
        
    - Testar se recebe um token JWT após o login.

### Usuários:

1. **Registro de Usuário:**
    - Método: **`POST`**
    - URL: **`http://localhost:3000/users/register`**
    - Body:
        
        ```perl
        {
          "nome": "Novo Usuário",
          "email": "novo_usuario@exemplo.com",
          "senha": "senha_novo_usuario"
        }
        
        ```
        
    - Testar se o usuário é registrado corretamente.
2. **Login de Usuário:**
    - Método: **`POST`**
    - URL: **`http://localhost:3000/users/login`**
    - Body:
        
        ```perl
        {
          "email": "novo_usuario@exemplo.com",
          "senha": "senha_novo_usuario"
        }
        
        ```
        
    - Testar se o login do novo usuário funciona corretamente.
3. **Perfil de Usuário:**
    - Método: **`GET`**
    - URL: **`http://localhost:3000/users/profile`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Testar se retorna o perfil do usuário.
4. **Atualização de Usuário:**
    - Método: **`PUT`**
    - URL: **`http://localhost:3000/users/ID_DO_USUARIO`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Body:
        
        ```perl
        {
          "nome": "Novo Nome",
          "email": "novo_email@exemplo.com",
          "senha": "nova_senha"
        }
        
        ```
        
    - Testar se o usuário é atualizado corretamente.
5. **Exclusão de Usuário:**
    - Método: **`DELETE`**
    - URL: **`http://localhost:3000/users/ID_DO_USUARIO`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Testar se o usuário é excluído corretamente.

### Funcionários:

1. **Criação de Funcionário:**
    - Método: **`POST`**
    - URL: **`http://localhost:3000/funcionarios`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Body:
        
        ```json
        {
          "nome": "Novo Funcionário",
          "email": "novo_funcionario@exemplo.com",
          "senha": "senha_novo_funcionario",
          "setor": "CD" // Ou outro setor permitido
        }
        
        ```
        
    - Testar se o funcionário é criado corretamente.
2. **Manipulação de Estoque por Funcionário:**
    - Métodos: **`GET`**, **`POST`**, **`PUT`**, **`DELETE`**
    - URL: **`http://localhost:3000/funcionarios/estoque`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Testar as operações de listar, criar, atualizar e excluir produtos no estoque.

### Gerentes:

1. **Manipulação de Produtos por Gerente:**
    - Métodos: **`GET`**, **`POST`**, **`PUT`**, **`DELETE`**
    - URL: **`http://localhost:3000/gerentes/produtos`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Testar as operações de listar, criar, atualizar e excluir produtos.
2. **Criação de Funcionário por Gerente:**
    - Método: **`POST`**
    - URL: **`http://localhost:3000/gerentes/funcionarios`**
    - Headers:
        - **`Authorization`**: **`Bearer SEU_TOKEN_JWT`**
    - Body:
        
        ```json
        {
          "nome": "Novo Funcionário",
          "email": "novo_funcionario@exemplo.com",
          "senha": "senha_novo_funcionario",
          "setor": "CD" // Ou outro setor permitido
        }
        
        ```
        
    - Testar se o gerente pode criar um novo funcionário.
