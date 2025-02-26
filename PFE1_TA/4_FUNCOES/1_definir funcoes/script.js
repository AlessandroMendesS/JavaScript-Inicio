function imprimirNoConsole() {
    console.log("Olá Turma");
}
imprimirNoConsole()

function imprimirNumero(num) {
    console.log("O numero é = " + num);
}
imprimirNumero(6)


function soma(num,num2) {
    console.log(Number(num) + Number(num2));
}
soma(2,6)

const numeroAleatorio = function() {
    console.log(Math.random());   
};
numeroAleatorio();