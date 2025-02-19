let idade = 18;

if(idade == 18) {
    console.log("Idade é 18");
}
if(idade > 25) {
    console.log("Idade maior que 25");
}

let nome = "Alessandro";
if(nome == "Alessandro" &&  idade >= 18) {
    console.log("Liberado!");   
}

let passaporte = true;
if (nome == "Alessandro" && idade >= 30 || passaporte == true) {
    console.log("Liberado 2!");
}