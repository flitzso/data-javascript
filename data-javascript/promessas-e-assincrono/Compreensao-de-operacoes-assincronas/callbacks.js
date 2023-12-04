console.log("Antes da operação assíncrona");

setTimeout(function() {
  console.log("Operação assíncrona concluída");
}, 2000);

console.log("Depois da operação assíncrona");
