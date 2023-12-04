let minhaPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Operação assíncrona concluída");
    }, 2000);
  });
  
  minhaPromise.then(function(resultado) {
    console.log(resultado);
  }).catch(function(erro) {
    console.error(erro);
  });
  