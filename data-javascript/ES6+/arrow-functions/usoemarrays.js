const numeros = [1, 2, 3, 4, 5];

// Usando função tradicional com map
const aoQuadradoTradicional = numeros.map(function(x) {
  return x ** 2;
});

// Usando arrow function com map
const aoQuadradoArrow = numeros.map(x => x ** 2);
