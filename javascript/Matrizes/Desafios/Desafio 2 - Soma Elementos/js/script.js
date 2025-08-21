function procFormulario(){
    /*Desafio2

    A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
    números reais e mostre a soma de seus elementos. */
    console.clear()
    let matriz = []
    let soma = 0, linha = 0
    
    for(let i=0; i < 4; i++){
        matriz[i] = []
        
        for(let c=0; c<3; c++){
            
            matriz[i][c] = parseInt(prompt("Digite um valor para armazenar: "))
        }
    }
    
    for(let i=0; i < 4; i++){        
        for(let c=0; c<3; c++){
            soma += matriz[i][c]
        }
    }
    console.log("Soma dos valores: "+soma)
    return false;
}