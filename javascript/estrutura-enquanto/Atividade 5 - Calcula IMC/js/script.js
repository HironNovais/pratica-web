function calculaIMC(){
    let imc=0
    let continuar=true
    console.clear()

    while(continuar){
        console.log("_____________________________________")
        peso = parseFloat(prompt("Digite o seu peso: "))
        altura = parseFloat(prompt("Digite a sua altura: "))
        imc = (peso / (altura * altura)).toFixed(2)
        console.log("Seu IMC é: "+imc+"!")
        continuar = window.confirm("Deseja realizar outro calculo de IMC?")
    }

    return false;
}