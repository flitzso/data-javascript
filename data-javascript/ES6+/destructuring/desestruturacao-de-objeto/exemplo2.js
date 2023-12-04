// Objeto original com alias
const pessoa = { nomeCompleto: 'Bob Marley', idade: 36 };

// Desestruturação com alias
const { nomeCompleto: nome, idade } = pessoa;

console.log(nome); // 'Bob Marley'
console.log(idade); // 36
