async function exemploComAwait() {
    try {
      console.log("Início da função assíncrona");
  
      let resultado = await minhaPromise;
  
      console.log(resultado);
      console.log("Fim da função assíncrona");
    } catch (erro) {
      console.error(erro);
    }
  }
  
  exemploComAwait();
  