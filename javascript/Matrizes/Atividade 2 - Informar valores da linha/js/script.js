function procFormulario(){
    console.clear()
    let matriz = []
    let soma = 0, linha = 0
    
    for(let i=0; i < 2; i++){
        matriz[i] = []
        
        for(let c=0; c<2; c++){
            
            matriz[i][c] = parseInt(prompt("Digite um valor para armazenar: "))
        }
    }
    do{
        linha = parseInt(prompt("Escolha uma linha para somar os valores: "))
        if(linha > 1){
            alert("Linha inválida, a matriz não possui a linha: "+linha)
        }
    }while(linha >1)

    for(let c=0; c<2; c++){
        soma += matriz[linha][c]
    }
    console.log("Valor da matriz")
    console.log(matriz)
    console.log("Valor da soma da linha: "+linha+" é igual a: "+soma)
    return false;
}