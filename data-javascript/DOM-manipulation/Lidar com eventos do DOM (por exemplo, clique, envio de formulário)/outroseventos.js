<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Outros Eventos</title>
</head>
<body>
  <div id="meuElemento">Passe o mouse sobre mim</div>

  <script>
    let meuElemento = document.getElementById("meuElemento");

    meuElemento.addEventListener("mouseover", function() {
      meuElemento.style.backgroundColor = "yellow";
    });

    meuElemento.addEventListener("mouseout", function() {
      meuElemento.style.backgroundColor = "white";
    });
  </script>
</body>
</html>
