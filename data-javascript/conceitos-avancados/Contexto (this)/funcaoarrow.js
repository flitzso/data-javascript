const minhaFuncaoArrow = () => {
    console.log(this);
  };
  
  minhaFuncaoArrow(); // `this` em uma função arrow refere-se ao valor de `this` no escopo léxico (o valor de `this` no contexto em que a função arrow é definida)
  