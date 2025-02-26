function multiplicar3Numeros(num, num2, num3) {
  return num * num2 * num3;
}
console.log(multiplicar3Numeros(2, 2, 2));

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log('Pode dirigir');
  } else {
    console.log('Não pode dirigir');
  }
}
podeDirigir(19, true);
podeDirigir(20, false);
podeDirigir(12, false);

