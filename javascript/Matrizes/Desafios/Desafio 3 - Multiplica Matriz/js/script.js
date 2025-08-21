function procFormulario(){
    /*Desafio 3 

    A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
    5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
    elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original 
    e a nova. */
    console.clear()
    let matriz = [], matrizMultiplicada = []
    
    for(let i=0; i < 5; i++){
        matriz[i] = []
        for(let c=0; c<5; c++){
            matriz[i][c] = parseInt(prompt("Digite um valor para a linha: "+(i+1)+" Coluna: "+(c+1)+": "))
        }
    }

    for(let i=0; i < 5; i++){
        matrizMultiplicada[i] = []
        for(let c=0; c<5; c++){
            matrizMultiplicada[i][c] = matriz[i][c] * 2
        }
    }
    console.log("Matriz Original")
    console.log(matriz)
    
    console.log("Matriz Multiplicada")
    console.log(matrizMultiplicada)
    return false;
}