function procFormulario(){
    let matriz = []
    for(let i=0; i < 2; i++){
        matriz[i] = []
        for(let c=0; c<3; c++){ 
            matriz[i][c] = parseInt(prompt("Digite ai um valor: "))
        }
    }
    console.log(matriz)
    return false;
}