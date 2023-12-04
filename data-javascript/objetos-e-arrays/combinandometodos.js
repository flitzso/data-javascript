let numeros = [1, 2, 3, 4, 5];

let resultado = numeros
  .filter(x => x % 2 === 0) // Filtra os números pares
  .map(x => x ** 2) // Eleva ao quadrado
  .reduce((acumulador, atual) => acumulador + atual, 0); // Soma

console.log(resultado); // 20
