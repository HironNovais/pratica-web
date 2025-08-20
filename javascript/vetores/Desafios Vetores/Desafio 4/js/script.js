function procFormulario(){
    console.clear()
    let arr = [], resultado = [], continuar = true
    let i = 0, cont = 0

    while(arr.length < 4){
        arr[i] = parseFloat(prompt("Digite um número para adicionar ao vetor!"))
        i++
    }
    console.log("Valores digitado: "+arr)
    for(let i=arr.length; i>=0; i--){
        resultado[cont] = arr[i]
        cont++
    }
    console.log("Valores inversos: "+resultado)
    return false;
}