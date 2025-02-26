let a = 10;
function multiplicar(x, y) {
  let a = x * y;
  if (a > 10) {
    let a = 0;
    a++;
    console.log('dentro if ' + a);
  } // fim if
  console.log('dentro funcao ' + a);
} // fim funcao
console.log('Fora funcao ' + a);
multiplicar(3, 7);
