const nomes = ["Alice", "Bob", "Charlie"];

// Usando função tradicional com filter
const filtroTradicional = nomes.filter(function(nome) {
  return nome.length > 4;
});

// Usando arrow function com filter
const filtroArrow = nomes.filter(nome => nome.length > 4);
