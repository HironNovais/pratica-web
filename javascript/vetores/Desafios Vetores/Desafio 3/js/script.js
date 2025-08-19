function procFormulario(){
    console.clear()
    let arr = [], continuar = true
    let i = 0

    while(arr.length < 5){
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    console.log(arr)
    while(continuar){
        
        let valor
        valor = parseFloat(prompt("Digite um número para multiplicar os valores digitados: "))

        
        if(valor==1000){ continuar = false }
    }
    
    return false;
}