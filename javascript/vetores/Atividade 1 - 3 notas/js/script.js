function procFormulario(){
    console.clear()
    let arr = []
    let i = 0

    while(arr.length < 3){
        arr[i] = parseFloat(prompt("Digite nota: "))
        i++
        
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 7.4){
            console.log("Nota iguais ou superiores a 7.5: "+arr[i])
        }
    }
    
    return false;
}