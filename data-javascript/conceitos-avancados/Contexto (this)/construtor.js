function Pessoa(nome) {
    this.nome = nome;
    this.dizerNome = function() {
      console.log(this.nome);
    };
  }
  
  const pessoa1 = new Pessoa("Alice");
  const pessoa2 = new Pessoa("Bob");
  
  pessoa1.dizerNome(); // `this` refere-se à instância pessoa1
  pessoa2.dizerNome(); // `this` refere-se à instância pessoa2
  