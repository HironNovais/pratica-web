function calcTabuada(){
    let valor = document.getElementById("inptVal").value

    if(valor > 0){
        console.log("Número selecionado: "+valor)
        for(let i=1; i<=10; i++){
            console.log(valor+" x "+i+" = "+(valor*i))
        }
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