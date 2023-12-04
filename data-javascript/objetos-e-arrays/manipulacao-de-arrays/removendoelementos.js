let numeros = [1, 2, 3, 4, 5];

// Removendo do final
let ultimoNumero = numeros.pop();

// Removendo do início
let primeiroNumero = numeros.shift();

// Removendo em uma posição específica
numeros.splice(2, 1);

console.log(ultimoNumero); // 5
console.log(primeiroNumero); // 1
console.log(numeros); // [2, 3, 5]
