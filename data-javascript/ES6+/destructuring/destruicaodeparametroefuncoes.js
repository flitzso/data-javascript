// Função com desestruturação de objeto
function imprimirDados({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  }
  
  const pessoa = { nome: 'João', idade: 30 };
  imprimirDados(pessoa); // Saída: Nome: João, Idade: 30
  