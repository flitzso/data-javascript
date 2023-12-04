async function minhaFuncaoAssincrona() {
    try {
      console.log("Antes da operação assíncrona");
      let resultado = await minhaPromise;
      console.log(resultado);
      console.log("Depois da operação assíncrona");
    } catch (erro) {
      console.error(erro);
    }
  }
  
  minhaFuncaoAssincrona();
  