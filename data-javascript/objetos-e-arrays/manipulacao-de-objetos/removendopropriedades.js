let aluno = {
    nome: "Carlos",
    nota: 90
  };
  
  // Removendo propriedade
  delete aluno.nota;
  
  console.log(aluno); // { nome: "Carlos" }
  