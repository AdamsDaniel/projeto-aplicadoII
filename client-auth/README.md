# StatusCheck - Serviço de Autenticação de Cliente

Este é o serviço de autenticação para o projeto StatusCheck. Ele lida com a autenticação de usuários e o gerenciamento de sessões.

## Visão Geral

O serviço é construído com Node.js e Express e fornece endpoints para login, logout e verificação de status de autenticação. Ele funciona em conjunto com a API principal para garantir que apenas usuários autenticados possam acessar os recursos protegidos.

### Funcionalidades

- **Endpoint de Login**: Autentica os usuários com base em suas credenciais.
- **Endpoint de Logout**: Encerra a sessão do usuário.
- **Verificação de Autenticação**: Permite que o frontend verifique se o usuário está autenticado.

## Começando

Estas instruções fornecerão uma cópia do serviço em funcionamento na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v20.18.0 LTS ou superior)
- [npm](https://www.npmjs.com/) (v10.9.0 ou superior)

### Instalação

1. **Navegue até o diretório `client-auth`:**
   ```sh
   cd client-auth
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
### Executando a Aplicação
- **Modo de Desenvolvimento:**
  ```sh
  npm run dev
  ```
- **Modo de Produção:**
  ```sh
  npm run start
  ```
O serviço estará disponível em `http://localhost:3031`.

## Endpoints

### `POST /login`

Autentica um usuário.

- **Corpo da Requisição (JSON):**
  ```json
  {
    "register": 1,
    "password": "12345678"
  }
  ```
- **Respostas:**
  - `200 OK`: `{ "message": "Usuário autenticado." }`
  - `401 Unauthorized`: `{ "message": "Senha incorreta" }`
  - `404 Not Found`: `{ "message": "Usuário não encontrado" }`

### `GET /is-authenticated`

Verifica se o usuário está autenticado.

- **Respostas:**
  - `200 OK`: `{ "message": "Usuário autenticado" }`
  - `401 Unauthorized`: `{ "message": "Nenhum usuário autenticado." }`

### `GET /logout`

Faz logout do usuário.

- **Respostas:**
  - `200 OK`: `{ "message": "Logout efetuado com sucesso!" }`
  - `401 Unauthorized`: `{ "message": "Nenhum usuário autenticado para efetuar logout." }`
