function procFormulario(){
    console.clear()
    let arr = []
    let i = 0

    while(arr.length < 10){
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    i = 0
    while(i == 0){
        let valor
        valor = parseFloat(Promt("Digite um número para encontrar no vetor: "))
        if( arr.indexOf(valor) >= 0){
            console.log("Valor encontrado na posição: "+arr.indexOf)
        }else{
            console.log("Valor não encontrado!")
        }
    }
    return false;
}