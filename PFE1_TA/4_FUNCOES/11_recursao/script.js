function recursao(x) {
  if (x - 1 < 2) {
    console.log('Recurcao parou!');
  } else if (x % 2 != 0) {
    console.log('Numero impar' + x);
  } else {
    console.log('Numero par' + x);
    recursao(x - 2);
  }
}

