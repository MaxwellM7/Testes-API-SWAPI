# Projeto de Testes da API SWAPI do Star Wars

Este projeto é uma coleção de testes para a API SWAPI (Star Wars API), que fornece informações sobre o universo de Star Wars, incluindo planetas, naves e filmes. Os testes são realizados utilizando a biblioteca [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest) para facilitar a realização de requisições HTTP.

## Funcionalidades

Os testes realizam as seguintes operações:

- **Requisição de planetas**:
  - Nome e população do primeiro planeta.
  - Nome e clima do segundo planeta.

- **Requisição de naves**:
  - Nome da primeira e da segunda nave.

- **Requisição de filmes**:
  - Título do primeiro e do segundo filme.

- **Testes de endpoints inexistentes**:
  - Verifica se a resposta para as rotas `/heroes` e `/villains` retorna um erro 404.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- NPM (Node Package Manager)

## Como instalar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/MaxwellM7/Testes-SWAPI.git
   cd Testes-SWAPI
