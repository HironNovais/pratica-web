function procFormulario(){
    let arr = []

    for(let i=0; i<3; i++){
        arr[i] = parseFloat(prompt("Digite o "+(i+1)+"º número: "))
        console.log("Valor do vetor: "+arr[i]+" na posição: "+(i+1))
    }
    console.log(arr)
    return false;
}