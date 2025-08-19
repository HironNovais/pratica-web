function procFormulario(){
    console.clear()
    let arr = [], continuar = true
    let i = 0

    while(arr.length < 10){
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    console.log(arr)
    while(continuar){
        
        let valor
        valor = parseFloat(prompt("Digite um número para encontrar no vetor ou digite 1000 para sair: "))

        if( arr.indexOf(valor) >= 0){
            console.log("Valor encontrado na posição: "+arr.indexOf(valor))
        }else{
            console.log("Valor não encontrado!")
        }
        if(valor==1000){ continuar = false }
    }
    
    return false;
}