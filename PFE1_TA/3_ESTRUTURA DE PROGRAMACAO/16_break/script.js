let nome = "José";
for(let i = 0; i < 10; i++) {
    if(i == 3) {
        nome = "Alessandro"
    }
    if (i == 5 && nome == "Alessandro") {
        console.log("O nome é Alessandro, pode parar");
        break
    }
}