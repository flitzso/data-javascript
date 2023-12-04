let minhaPromise = new Promise(function(resolve, reject) {
    // Simula uma operação assíncrona (ex: chamada de API)
    setTimeout(function() {
      let sucesso = true;
  
      if (sucesso) {
        resolve("Operação bem-sucedida!");
      } else {
        reject("Falha na operação!");
      }
    }, 2000);
  });
  
  minhaPromise.then(function(resultado) {
    console.log(resultado);
  }).catch(function(erro) {
    console.error(erro);
  });
  