function minhaFuncao() {
    console.log(this);
  }
  
  minhaFuncao(); // No contexto global, `this` refere-se ao objeto global (por exemplo, `window` no navegador, ou `global` no Node.js)
  