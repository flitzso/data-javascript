const meuObjeto = {
    propriedade: "Valor",
    meuMetodo: function() {
      console.log(this.propriedade);
    }
  };
  
  meuObjeto.meuMetodo(); // `this` refere-se ao objeto no qual o método é chamado (meuObjeto)
  