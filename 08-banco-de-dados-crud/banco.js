const { DatabaseSync } = require("node:sqlite");

const banco = new DatabaseSync("08-banco-de-dados-crud/tarefas.db");

banco.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        feito INTEGER DEFAULT 0
    )
`);

banco.prepare("INSERT INTO tarefas (titulo) VALUES (?)").run("Estudar HTML");
banco.prepare("INSERT INTO tarefas (titulo) VALUES (?)").run("Estudar CSS");

const lista = banco.prepare("SELECT * FROM tarefas").all();
console.log(lista);