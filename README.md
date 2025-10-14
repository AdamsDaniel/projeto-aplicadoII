# StatusCheck - Visão Geral do Projeto

Bem-vindo ao repositório do StatusCheck, uma aplicação completa para gerenciamento e visualização de status de treinamentos de colaboradores.

## Arquitetura

Este repositório contém uma arquitetura de microsserviços, composta por três subprojetos principais:

1.  **`StatusCheckProjetoIntegrado` (Frontend)**: Uma aplicação single-page (SPA) construída com React. Ela fornece a interface do usuário para interagir com a plataforma, visualizar dashboards e gerenciar dados.

2.  **`api-consulta-status-treinamentos` (API Backend)**: O serviço principal de backend, construído com Node.js e Express. Ele lida com a lógica de negócios, operações CRUD (Criar, Ler, Atualizar, Excluir) e se comunica com o banco de dados PostgreSQL.

3.  **`client-auth` (Serviço de Autenticação)**: Um microsserviço dedicado para lidar com a autenticação de usuários. Ele gerencia o login, logout e a verificação de sessões, garantindo que apenas usuários autorizados acessem a aplicação.

### Como Eles Funcionam Juntos

- O **Frontend** (`StatusCheckProjetoIntegrado`) é o ponto de entrada para os usuários. Quando um usuário tenta fazer login, o frontend envia uma requisição para o **Serviço de Autenticação** (`client-auth`).
- O **Serviço de Autenticação** valida as credenciais e, se bem-sucedido, cria uma sessão para o usuário.
- Com uma sessão ativa, o **Frontend** pode fazer requisições à **API Backend** (`api-consulta-status-treinamentos`) para buscar ou manipular dados, como informações de colaboradores e status de treinamentos.
- A **API Backend** protege seus endpoints, garantindo que apenas requisições de usuários autenticados (verificadas através do `client-auth`) sejam processadas.

## Começando

Para executar o projeto completo, você precisará configurar e iniciar cada um dos três serviços. Consulte os arquivos `README.md` dentro de cada diretório de subprojeto para obter instruções detalhadas de instalação e execução:

- [`StatusCheckProjetoIntegrado/README.md`](./StatusCheckProjetoIntegrado/README.md)
- [`api-consulta-status-treinamentos/README.md`](./api-consulta-status-treinamentos/README.md)
- [`client-auth/README.md`](./client-auth/README.md)

## Pré-requisitos Globais

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

Certifique-se de que todas as dependências estejam instaladas antes de prosseguir com a configuração de cada serviço.
