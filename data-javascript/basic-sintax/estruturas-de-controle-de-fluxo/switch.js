let diaSemana = 3;
let mensagem = "";

switch (diaSemana) {
  case 1:
    mensagem = "Segunda-feira";
    break;
  case 2:
    mensagem = "Terça-feira";
    break;
  case 3:
    mensagem = "Quarta-feira";
    break;
  // ... outros casos ...
  default:
    mensagem = "Dia inválido";
}
console.log(mensagem);
