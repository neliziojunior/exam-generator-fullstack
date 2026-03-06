# 🧠 Exam Generator Fullstack

Sistema fullstack para criação e geração automática de provas.

O projeto permite cadastrar questões, armazená-las em banco de dados e gerar provas automaticamente a partir das questões cadastradas.

---

# 🚀 Tecnologias utilizadas

Backend
- Node.js
- TypeScript
- Express

Frontend
- HTML
- CSS
- JavaScript

Ferramentas
- Postman (testes de API)
- Git
- GitHub

---

# 🏗️ Arquitetura do Projeto

O backend segue uma arquitetura inspirada em **MVC + Camadas de Serviço**.

```
src/
 ├── controllers
 ├── services
 ├── repositories
 ├── models
 ├── routes
 └── server.ts
```

### Controllers
Responsáveis por receber requisições HTTP e retornar respostas.

### Services
Contêm a lógica de negócio da aplicação.

### Repositories
Responsáveis pela comunicação com o banco de dados.

### Models
Estrutura dos dados utilizados no sistema.

### Routes
Definição das rotas da API.

---

# 📡 Endpoints da API

## Criar questão

POST

```
/questions
```

Body:

```json
{
  "title": "O que é Node.js?",
  "alternatives": [
    "Um banco de dados",
    "Um runtime JavaScript",
    "Uma linguagem",
    "Um framework"
  ],
  "correctAnswer": 1
}
```

---

## Listar questões

GET

```
/questions
```

---

## Atualizar questão

PUT

```
/questions/:id
```

---

## Gerar prova

GET

```
/exam
```

O endpoint gera automaticamente uma prova com **5 questões aleatórias**.

---

# 🧠 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes como:

- Arquitetura em camadas
- Criação de APIs REST
- Organização de backend profissional
- Integração frontend + backend
- Manipulação de requisições HTTP
- Versionamento com Git

---

# ⚠️ Desafios do projeto

A maior dificuldade do projeto foi realizar a **integração entre o frontend e o backend**, garantindo que:

- as requisições HTTP fossem feitas corretamente
- os dados enviados no body estivessem no formato esperado
- o frontend conseguisse consumir a API corretamente

Também foi necessário compreender melhor o fluxo completo de uma aplicação fullstack:

```
Frontend → API → Controller → Service → Repository → Dados
```

Esse processo ajudou a entender como aplicações reais são estruturadas.

---

# 📌 Melhorias futuras

- integração com banco PostgreSQL
- geração de questões usando IA
- autenticação de usuários
- interface mais avançada
- deploy da aplicação

---

# 👨‍💻 Autor

Nelizio Lefundes do Carmo Júnior

LinkedIn  
https://www.linkedin.com/in/neliziojunior

GitHub  
https://github.com/neliziojunior
