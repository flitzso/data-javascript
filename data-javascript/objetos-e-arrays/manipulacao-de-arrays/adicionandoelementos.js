let frutas = ["maçã", "banana", "laranja"];

// Adicionando no final
frutas.push("uva");

// Adicionando no início
frutas.unshift("morango");

// Adicionando em uma posição específica
frutas.splice(2, 0, "kiwi", "abacaxi");

console.log(frutas); // ["morango", "maçã", "kiwi", "abacaxi", "banana", "laranja", "uva"]
