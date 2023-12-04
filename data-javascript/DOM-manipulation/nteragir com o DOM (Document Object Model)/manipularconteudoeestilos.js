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
    // Manipular conteúdo
    divElemento.innerHTML = "<p>Novo conteúdo</p>";

    // Manipular estilos
    primeiroParagrafo.style.color = "blue";
    todosParagrafos.forEach(paragrafo => {
      paragrafo.style.fontWeight = "bold";
    });
  </script>
</body>
</html>
