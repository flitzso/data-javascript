<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Evento de Envio de Formulário</title>
</head>
<body>
  <form id="meuFormulario">
    <input type="text" name="usuario" placeholder="Nome de usuário">
    <input type="password" name="senha" placeholder="Senha">
    <button type="submit">Enviar</button>
  </form>

  <script>
    let meuFormulario = document.getElementById("meuFormulario");

    meuFormulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o comportamento padrão de envio do formulário

      let usuario = meuFormulario.elements.usuario.value;
      let senha = meuFormulario.elements.senha.value;

      alert("Usuário: " + usuario + "\nSenha: " + senha);
    });
  </script>
</body>
</html>
