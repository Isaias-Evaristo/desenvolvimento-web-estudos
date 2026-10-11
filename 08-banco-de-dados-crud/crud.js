const { DatabaseSync } = require("node:sqlite");

const banco = new DatabaseSync("08-banco-de-dados-crud/tarefas.db");

// CREATE: cria uma tarefa nova
banco.prepare("INSERT INTO tarefas (titulo) VALUES (?)").run("Estudar JavaScript");
console.log("Depois de criar:", banco.prepare("SELECT * FROM tarefas").all());

// UPDATE: marca a tarefa de id 1 como feita
banco.prepare("UPDATE tarefas SET feito = 1 WHERE id = 1").run();
console.log("Depois de atualizar:", banco.prepare("SELECT * FROM tarefas").all());

// DELETE: apaga a tarefa de id 2
banco.prepare("DELETE FROM tarefas WHERE id = 2").run();
console.log("Depois de apagar:", banco.prepare("SELECT * FROM tarefas").all());