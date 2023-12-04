<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Evento de Clique</title>
</head>
<body>
  <button id="meuBotao">Clique em mim</button>

  <script>
    let meuBotao = document.getElementById("meuBotao");

    meuBotao.addEventListener("click", function() {
      alert("Botão clicado!");
    });
  </script>
</body>
</html>
