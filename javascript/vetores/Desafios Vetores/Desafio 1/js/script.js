function procFormulario(){
    console.clear()
    let mediaNota = [], A = [], B = [], nome = []
    let i = 0

    while(i<3){
        console.log(i)
        nome[i] = prompt("Digite o nome do aluno:")
        A[i] = parseFloat(prompt("Digite a primeira nota: ")).toFixed(2)
        B[i] = parseFloat(prompt("Digite a segunda nota: ")).toFixed(2)
        mediaNota[i] = (parseFloat(A[i]) + parseFloat(B[i])) / 2
        i++
    }
    mediaNota[0]
    for(i=0; i<3; i++){
        console.log('')
        console.log("Aluno: "+nome[i])
        console.log("Nota 01: "+A[i])
        console.log("Nota 02: "+B[i])
        console.log("Média: "+mediaNota[i])
    }
    return false;
}