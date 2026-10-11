# Banco de dados e CRUD

Primeiros passos com banco de dados usando SQLite no Node.js.

O SQLite é um banco de dados que fica dentro de um único arquivo, sem precisar instalar um servidor.

## O que foi praticado

- Tabela, registro e chave (`id`)
- Criar uma tabela com `CREATE TABLE`
- CRUD:
  - Create: `INSERT`
  - Read: `SELECT`
  - Update: `UPDATE`
  - Delete: `DELETE`
- Usar `WHERE` para mexer só em um registro

## Como rodar

1. No terminal, rode: `node 08-banco-de-dados-crud/banco.js`
2. Depois: `node 08-banco-de-dados-crud/crud.js`

## Arquivos

- `banco.js`: cria a tabela e adiciona as primeiras tarefas
- `crud.js`: cria, atualiza e apaga tarefas