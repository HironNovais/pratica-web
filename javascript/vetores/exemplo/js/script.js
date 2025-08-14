function procFormulario(){
    let arr = []

    for(let i=0; i<3; i++){
        arr[i] = prompt("Digite o "+(i+1)+"º número: ")
    }
    console.log(arr)
    return false;
}