function calculaIMC(){
    let imc=0
    let continuar=true
    console.clear()
    //v1 = parseInt(document.getElementById("inptVal1").value)
    //v2 = parseInt(document.getElementById("inptVal2").value)

    while(continuar){
        console.log("_____________________________________")
        peso = parseFloat(prompt("Digite o seu peso: "))
        altura = parseFloat(prompt("Digite a sua altura: "))
        imc = peso / (altura * altura)
        console.log("Seu IMC é: "+imc+"!")
        continuar = window.confirm("Deseja realizar outro calculo de IMC?")
        //if(prompt("Deseja fazer outro calculo? Digite 1 para sim 0 para não: ")==0){ continuar = false }
    }

    return false;
}