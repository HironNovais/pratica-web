function procFormulario(){
    /*Atividade 1-Alimentar uma matriz (3x3) de valores inteiros, multiplicando essa matriz por um
        valor informado pelo usuário e escrevendo o conteúdo da matriz multiplicada.*/
    console.clear()
    let matriz = [], matrizOriginal = []
    let i = 0

    for(let i=0; i<3; i++){
        matrizOriginal[i] = []
        for(let c=0; c<3; c++){
            matrizOriginal[i][c] = parseInt(prompt("Digite o valor da linha: "+(i+1)+" Coluna: "+(c+1)+":"))
        }
    }
    console.log("Matriz original")
    console.log(matrizOriginal)
    let val = parseInt(prompt("Digite um valor para multiplicar o valor inicial da matriz: "))
    
    for(let i=0; i<3; i++){
        matriz[i] = []
        for(let c=0; c<3; c++){
            matriz[i][c] = matrizOriginal[i][c] * val
        }
    }
    console.log("Matriz Multiplicada")
    console.log(matriz)

    
    
    return false;
}