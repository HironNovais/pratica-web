function calcIMC(){
    let soma=0
    console.clear()
    v1 = parseInt(document.getElementById("inptPeso").value)
    v2 = parseInt(document.getElementById("inptAltura").value)

    while(soma!=(v1+v2)){
        soma = parseInt(prompt("Digite o valor da soma dos números informados: "))
        if(soma!=(v1+v2)){
            console.log("Tente Novamente!")
        }else{
            console.log("Resultado Correto!")
        }
    }

    return false;
}