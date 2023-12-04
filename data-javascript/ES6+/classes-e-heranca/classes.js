// Definindo uma classe
class Animal {
    // Construtor da classe
    constructor(nome) {
      this.nome = nome;
    }
  
    // Método da classe
    fazerBarulho() {
      console.log("Fazendo algum barulho...");
    }
  }
  
  // Criando uma instância da classe
  const meuAnimal = new Animal("Rex");
  
  // Chamando métodos da instância
  console.log(meuAnimal.nome); // Rex
  meuAnimal.fazerBarulho(); // Fazendo algum barulho...
  