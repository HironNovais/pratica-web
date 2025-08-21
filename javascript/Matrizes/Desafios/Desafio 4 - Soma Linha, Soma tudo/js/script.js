function procFormulario(){
    /* Desafio 4 

    O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
    de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
    de todos os elementos.*/

    console.clear()
    let matriz = [], somaLinha = [], total=0
    
    for(let i=0; i < 4; i++){
        matriz[i] = []
        somaLinha[i] = 0
        for(let c=0; c<5; c++){
            matriz[i][c] = parseInt(prompt("Digite um valor para a linha: "+(i+1)+" Coluna: "+(c+1)+": "))
            somaLinha[i] += parseInt(matriz[i][c])
            total += parseInt(matriz[i][c])
        }
    }
    console.log("Matriz")
    console.log(matriz)
    
    console.log("Soma de cada linha")
    console.log(somaLinha)

    console.log("Total da matriz: "+total)

    return false
}