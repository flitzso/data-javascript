function verificarParidade(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
  
  let resultadoParidade = verificarParidade(7);
  console.log(resultadoParidade); // Saída: "Ímpar"
  