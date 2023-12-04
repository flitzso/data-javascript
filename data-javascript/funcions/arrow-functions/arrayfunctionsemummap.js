let numeros = [1, 2, 3, 4];

// Usando função tradicional com map
let aoQuadradoTradicional = numeros.map(function(x) {
  return x ** 2;
});

// Usando arrow function com map
let aoQuadradoArrow = numeros.map(x => x ** 2);
