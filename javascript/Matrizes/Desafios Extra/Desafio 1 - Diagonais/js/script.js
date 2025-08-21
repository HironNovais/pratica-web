function procFormulario(){
    /*Desafio 1
    O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
    uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
    total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
    andar.*/
    console.clear()
    let matriz = []
    let cont = 0

    for(let i=0; i<4; i++){
        matriz[i] = []
        for(let c=0; c<4; c++){
            cont++
            matriz[i][c] = cont+i+c
            if(cont==4){ cont = 0}
        }
    }
    console.log(matriz)
    /*for(let i=0; i<4; i++){
        for(let c=0; c<4; c++){
            console.log(matriz[i][c])
        }
    }*/
    console.log("Diagonal 01")
    for(let i=0; i<4; i++){
        for(let c=0; c<4; c++){
            if(i==c){
                console.log(matriz[i][c])
            }
        }
    }
    console.log("Diagonal 02")
    for(let i=0; i<=3; i++){
        for(let c=0; c<=3; c++){
            if((i+c) == 3){
                console.log(matriz[i][c])
            }
        }
    }
    
    return false;
}