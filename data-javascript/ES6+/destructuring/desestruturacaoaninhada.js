const empresa = {
    nome: 'TechCorp',
    endereco: {
      cidade: 'CidadeTech',
      estado: 'EST'
    }
  };
  
  const { nome, endereco: { cidade, estado } } = empresa;
  
  console.log(nome); // 'TechCorp'
  console.log(cidade); // 'CidadeTech'
  console.log(estado); // 'EST'
  