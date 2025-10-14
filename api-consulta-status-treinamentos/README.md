# StatusCheck - API de Consulta de Status de Treinamentos

Esta é a API backend para o projeto StatusCheck. Ela gerencia a lógica de negócios, a interação com o banco de dados e fornece endpoints para o frontend.

## Visão Geral

A API é construída com Node.js e Express, seguindo uma arquitetura que separa as responsabilidades em rotas, controladores e modelos. Ela se conecta a um banco de dados PostgreSQL para persistir os dados.

### Funcionalidades

- **Autenticação de Usuários**: Gerencia o login e as sessões dos usuários.
- **Operações CRUD**: Fornece endpoints para Criar, Ler, Atualizar e Excluir dados relacionados a colaboradores, treinamentos e status.
- **Validação de Dados**: Garante a integridade dos dados antes de serem salvos no banco de dados.
- **Middleware**: Utiliza middlewares para tratamento de erros, autenticação e outras funcionalidades transversais.

## Começando

Estas instruções fornecerão uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v20.18.0 LTS ou superior)
- [npm](https://www.npmjs.com/) (v10.9.0 ou superior)
- [Docker](https://www.docker.com/) (com docker-compose)
- [Git](https://git-scm.com/)

### Instalação

#### 1. Configuração do Banco de Dados com Docker

No diretório `/docker`:

```sh
docker-compose -f docker-compose-postgres.yaml up -d
```
Acesse o pgAdmin em [http://localhost:5050/](http://localhost:5050/) e configure um novo servidor com as seguintes credenciais:

- **Host**: `postgres` (ou o nome do container do seu banco de dados)
- **Port**: `5432`
- **Username**: `postgres`
- **Password**: `123456`

#### 2. Instalação das Dependências

No diretório raiz do projeto:

```sh
npm install --save-dev
```
Se encontrar vulnerabilidades, execute:
```sh
npm update
npm audit fix
```
#### 3. Migração do Banco de Dados
```sh
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```
#### 4. Executando a Aplicação
Modo de desenvolvimento:
```sh
npm run dev
```
A API estará disponível em `http://localhost:3030`.

## Testes

Para testar as funcionalidades, utilize os seguintes comandos:

- **Executar testes em modo headless:**
  ```sh
  npm run test:cypress
  ```
- **Abrir a interface gráfica do Cypress:**
  ```sh
  npm run test:cypress:open
  ```
Relatórios de teste e capturas de tela estarão disponíveis nos diretórios `cypress/results` e `cypress/screenshots`.

## Endpoints da API

Para uma lista completa dos endpoints, autentique-se como 'master' e acesse a documentação da API em `http://localhost:3030/`.

## Variáveis de Ambiente

As configurações de ambiente, como credenciais do banco de dados e senhas de usuários, estão no arquivo `.env`.

## Funcionamento

A API oferece funcionalidades para importação e exportação de dados em formato CSV. Os modelos de planilha podem ser baixados na seção 'Baixar Modelos'. É crucial que a estrutura dos modelos não seja alterada para garantir a compatibilidade.

## Observações

- O usuário 'master' não pode alterar sua própria senha através da aplicação.
- A aplicação está configurada para o modo de desenvolvimento. Para produção, altere a variável `NODE_ENV` no arquivo `.env` para `production` e inicie com `npm run start`.
