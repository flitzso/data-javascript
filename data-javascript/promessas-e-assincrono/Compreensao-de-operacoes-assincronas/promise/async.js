async function minhaFuncaoAssincrona() {
    return "Resultado da função assíncrona";
  }
  
  minhaFuncaoAssincrona().then(function(resultado) {
    console.log(resultado);
  });
  