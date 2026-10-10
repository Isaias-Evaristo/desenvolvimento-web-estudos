console.log("Olá, JavaScript!");

let nome = "Isaias";
let idade = 29; 
let estudante = true; 

console.log(nome);
console.log(idade);
console.log(estudante);

let a = 10; 
let b = 3; 

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b);

let = idade2 = 15; 

if (idade2 >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
  
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Maria");
saudacao("Isaias");

function somar(x,    y) {
    console.log("Total: " + (x + y));
}

somar(8, 5);
somar(7, 9);