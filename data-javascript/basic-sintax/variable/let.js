let x = 10;
if (true) {
  let x = 20; // escopo de bloco
  console.log(x); // 20
}
console.log(x); // 10
