function procFormulario(){
    console.clear()
    let arr = [], resultado = [], continuar = true
    let i = 0

    while(arr.length < 5){
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    console.log(arr)
    while(continuar){
        let valor
        valor = parseFloat(prompt("Digite um número para multiplicar os valores digitados ou digite 0 para sair: "))
     
        console.log(resultado)
        if(valor==0){ 
            continuar = false
        }else{
            for(let i=0; i<5; i++){
                resultado[i] = arr[i] * valor
            }
        }
    }
    
    return false;
}