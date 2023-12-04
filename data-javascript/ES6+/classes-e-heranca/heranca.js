// Herança utilizando a palavra-chave extends
class Cachorro extends Animal {
    // Novo construtor da classe filha
    constructor(nome, raca) {
      // Chamando o construtor da classe pai
      super(nome);
      this.raca = raca;
    }
  
    // Sobrescrevendo o método da classe pai
    fazerBarulho() {
      console.log("Latindo...");
    }
  
    // Novo método da classe filha
    correr() {
      console.log("Correndo...");
    }
  }
  
  // Criando uma instância da classe filha
  const meuCachorro = new Cachorro("Max", "Labrador");
  
  // Chamando métodos da instância
  console.log(meuCachorro.nome); // Max
  console.log(meuCachorro.raca); // Labrador
  meuCachorro.fazerBarulho(); // Latindo...
  meuCachorro.correr(); // Correndo...
  