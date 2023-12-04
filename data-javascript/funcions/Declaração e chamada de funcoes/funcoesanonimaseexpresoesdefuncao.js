// Função anônima
let saudacaoAnonima = function() {
    console.log("Oi, anônimo!");
  };
  
  // Chamada de função anônima
  saudacaoAnonima(); // Saída: "Oi, anônimo!"
  
  // Expressão de função (usando arrow function)
  let elevarAoQuadrado = (x) => x ** 2;
  
  // Chamada de função com expressão de função
  let resultadoQuadrado = elevarAoQuadrado(4);
  console.log(resultadoQuadrado); // Saída: 16
  