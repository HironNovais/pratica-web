function procFormulario(){
    console.clear()
    let arr = []
    let i = 0

    while(arr.length < 10){
        //arr[i] = parseFloat(Math.random() * 10).toFixed(2)
        //console.log("Posição: "+i+" Valor: "+arr[i])
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    console.log('')
    for(i=0; i<arr.length; i++){
        
        if(i%2 == 1){
            console.log("Valor na posição: "+i+" do array "+arr[i])
        }
    }
    return false;
}