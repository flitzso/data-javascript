function exemploConst() {
    const y = 20;
    // y = 30; // Erro: Não é possível reatribuir uma constante
    console.log(y); // 20
  
    const meuArray = [1, 2, 3];
    meuArray.push(4); // Modificação permitida
    console.log(meuArray); // [1, 2, 3, 4]
  }
  