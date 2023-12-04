let animais = ["cachorro", "gato", "pássaro"];

// Iteração com forEach
animais.forEach(animal => console.log(animal));

// Mapeando um novo array
let pluralAnimais = animais.map(animal => animal + "s");

console.log(pluralAnimais); // ["cachorros", "gatos", "pássaros"]
