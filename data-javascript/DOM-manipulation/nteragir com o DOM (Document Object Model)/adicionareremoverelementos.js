<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interagindo com o DOM</title>
</head>
<body>
  <div id="minhaDiv">
    <p class="paragrafo">Olá, mundo!</p>
    <p class="paragrafo">Bem-vindo ao DOM!</p>
  </div>

  <script>
    // Adicionar elemento
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Novo parágrafo";
    divElemento.appendChild(novoParagrafo);

    // Remover elemento
    let paragrafoRemovido = todosParagrafos[0];
    paragrafoRemovido.parentNode.removeChild(paragrafoRemovido);
  </script>
</body>
</html>
