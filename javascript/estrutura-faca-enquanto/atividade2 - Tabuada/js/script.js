function calcTabuada(){
    let valor = document.getElementById("inptVal").value
    let cont=0
    if(valor > 0){
        console.log("Número selecionado: "+valor)

        do{
            cont++
            console.log(valor+" x "+cont+" = "+(valor*cont))
        }while(cont < 10)
    }else{
        console.log("Valor: "+valor)
        if(valor==""){
            alert("Digite um número!")
        }else{
            alert("Número inválido!")
        }
    }
    return false;
}