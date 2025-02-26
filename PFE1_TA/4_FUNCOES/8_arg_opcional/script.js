function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log('Esta funcao precisa de 2 argumentos');
  } else {
    return a + b;
  }
}
console.log(soma(1)); // cai no if
console.log(soma(1,2)); // cai no else

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log("Ola " + nome);
  } else {
    console.log("Olá " + nome + " voce tem " + idade + " anos");
  }
}
saudacao("Alessandro");
saudacao("Aless",17);