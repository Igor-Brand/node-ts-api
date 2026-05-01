# 🚀 API REST com Node.js e TypeScript

## 📌 Visão Geral

Este projeto consiste no desenvolvimento de uma **API REST robusta, escalável e segura**, construída utilizando **Node.js** e **TypeScript**.

A aplicação foi projetada para atuar como backend de um sistema de gerenciamento, podendo ser integrada facilmente a um frontend (ex: React com Material UI).

O foco principal está na aplicação de:

* Boas práticas de desenvolvimento
* Arquitetura organizada
* Segurança
* Testes automatizados

---

## 🧰 Stack Tecnológica

### 🔹 Backend

* **Node.js** — Ambiente de execução
* **TypeScript** — Tipagem estática

### 🔹 Framework

* **Express** — Gerenciamento de rotas e middlewares

### 🔹 Banco de Dados

* **Knex.js** — Query Builder e gerenciamento de migrations/seeds
* **SQLite** — Desenvolvimento e testes
* **PostgreSQL** — Produção

### 🔹 Validação

* **Yup** — Validação de dados com mensagens customizadas

### 🔹 Segurança

* **JWT (JSON Web Token)** — Autenticação
* **BCrypt** — Hash de senhas

### 🔹 Testes

* **Jest** — Testes automatizados
* **Supertest** — Testes de integração HTTP

---

## 🏗️ Arquitetura do Projeto

A estrutura segue uma organização modular dentro da pasta `src`:

```
src/
├── index.ts        # Ponto de entrada da aplicação
├── server.ts       # Configuração do servidor
├── controllers/    # Regras de negócio dos endpoints
├── middlewares/    # Autenticação e validações
├── database/       # Configuração do banco, migrations e seeds
└── shared/         # Utilitários e configurações globais
```

### 🔹 Padrões adotados

* Separação de responsabilidades
* Código tipado e seguro
* ESLint + EditorConfig para padronização

---

## ⚙️ Funcionalidades

### 🔐 Autenticação

* Cadastro de usuários
* Login com geração de token JWT
* Senhas criptografadas

### 📦 CRUD Completo

* Gestão de **Cidades**
* Gestão de **Pessoas**

### 🔎 Listagem Avançada

* Paginação
* Filtros por:

  * Nome
  * ID

### 🔗 Relacionamentos

* Integridade referencial (ex: Pessoa vinculada a Cidade)

---

## 🧪 Testes

O projeto possui testes de integração garantindo o funcionamento dos endpoints.

```bash
yarn test
# ou
npm run test
```

---

## 🚀 Como Executar o Projeto

### 📥 Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

yarn install
# ou
npm install
```

### ▶️ Rodando em desenvolvimento

```bash
yarn dev
# ou
npm run dev
```

### 🏗️ Build

```bash
yarn build
# ou
npm run build
```

---

## 🛠️ Ferramentas de Desenvolvimento

* **ts-node-dev** — Hot reload no desenvolvimento
* **Insomnia** — Testes manuais de API
* **ESLint** — Padronização de código
* **EditorConfig** — Consistência entre editores

---

## 📌 Endpoints (Exemplo)

| Método | Rota    | Descrição           |
| ------ | ------- | ------------------- |
| POST   | /signup | Cadastro de usuário |
| POST   | /signin | Login               |
| GET    | /cities | Lista cidades       |
| POST   | /cities | Cria cidade         |
| GET    | /people | Lista pessoas       |
| POST   | /people | Cria pessoa         |

---

## 🔐 Autenticação

Para acessar rotas protegidas, envie o token no header:

```
Authorization: Bearer <seu_token>
```

---

## 📈 Possíveis Melhorias

* Deploy com Docker
* Documentação com Swagger
* Cache com Redis
* Rate limiting
* Logs estruturados

---

## 👨‍💻 Autor

Desenvolvido como parte dos estudos em Node.js, TypeScript e construção de APIs REST.

---

## 📄 Licença

Este projeto está sob a licença MIT.


