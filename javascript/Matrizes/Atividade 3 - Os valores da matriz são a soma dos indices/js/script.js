function procFormulario(){
    console.clear()
    let matriz = []
    let soma = 0, linha = 0
    
    for(let i=0; i < 2; i++){
        matriz[i] = []
        
        for(let c=0; c<2; c++){
            
            matriz[i][c] = i+c
        }
    }
    console.log(matriz)
}