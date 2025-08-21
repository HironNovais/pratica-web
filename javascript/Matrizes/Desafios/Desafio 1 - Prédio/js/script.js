function procFormulario(){
    /*Desafio 1
    O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
    uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
    total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
    andar.*/
    console.clear()
    let renda = [], media=0, total=0, cont=0
    let i = 0

    for(let i=0; i<6; i++){
        renda[i] = []
        for(let c=0; c<4; c++){
            renda[i][c] = parseInt(prompt("Digite o valor da renda da familia no andar: "+(i+1)+" Apartamento: "+(c+1)+":"))
            media += renda[i][c]
            total += renda[i][c]
            cont++
        }
    }

    console.log("Renda de individual de cada apartamento do prédio")
    console.log(renda)
    console.log("Média de renda do prédio: "+(media/cont))
    console.log("Renda Total de todos os moradores: "+total)    
    
    return false;
}