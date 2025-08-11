function procFormulario(){
    let cont=1
    let soma=0
    while(cont<4){
        soma += parseFloat(prompt("Digite o "+cont+"º valor: "))
        console.log(cont+"º passagem - Soma atual: "+soma)
        cont++
        
    }
    return false;
}