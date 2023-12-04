const meuBotao = document.getElementById("meuBotao");

meuBotao.addEventListener("click", function() {
  console.log(this); // `this` refere-se ao elemento DOM que disparou o evento (meuBotao)
});
