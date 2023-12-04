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
    // Selecionar elementos
    let divElemento = document.getElementById("minhaDiv");
    let paragrafos = document.getElementsByClassName("paragrafo");
    let primeiroParagrafo = document.querySelector(".paragrafo");
    let todosParagrafos = document.querySelectorAll(".paragrafo");
  </script>
</body>
</html>
