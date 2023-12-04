function criarContador() {
    let contador = 0;
  
    function incrementar() {
      contador++;
      console.log(contador);
    }
  
    return incrementar;
  }
  
  const meuContador = criarContador();
  
  meuContador(); // Saída: 1
  meuContador(); // Saída: 2
  