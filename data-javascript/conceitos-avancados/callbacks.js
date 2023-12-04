function fazerAlgoAsync(callback) {
    // Simulando uma operação assíncrona
    setTimeout(function() {
      console.log("A operação assíncrona foi concluída!");
      callback(); // Chamando o callback após a conclusão
    }, 1000);
  }
  
  function meuCallback() {
    console.log("Callback executado!");
  }
  
  // Chamando a função com o callback
  fazerAlgoAsync(meuCallback);
  