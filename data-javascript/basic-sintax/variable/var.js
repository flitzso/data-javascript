var a = 5;
if (true) {
  var a = 10; // escopo de função (hoisting)
  console.log(a); // 10
}
console.log(a); // 10 (o valor foi modificado no escopo de função)
