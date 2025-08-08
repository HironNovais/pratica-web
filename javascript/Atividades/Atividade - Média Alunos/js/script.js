function calcMedia(){
    console.log("Entrou na função")
    let nota = 0
    let notasMaiorMedia=0, qtdAlunos=0, mediaGeral=0
    let cont=0, turma=0
    
    turma = parseInt(document.getElementById("inptVal1").value)
    qtdAlunos +=turma
    if(turma != 0){
        for(let i=1; i<=turma; i++){
            nota = parseFloat(prompt("Digite a nota do aluno da turma 01"))
            mediaGeral += nota
            if(nota >= 7){notasMaiorMedia++}
        }
    }
    turma = parseInt(document.getElementById("inptVal2").value)
    qtdAlunos +=turma
    if(turma != 0){
        for(let i=1; i<=turma; i++){
            nota = parseFloat(prompt("Digite a nota do aluno da turma 02"))
            mediaGeral += nota
            if(nota >= 7){notasMaiorMedia++}
        }
    }
    turma = parseInt(document.getElementById("inptVal3").value)
    qtdAlunos +=turma
    if(turma != 0){
        for(let i=1; i<=turma; i++){
            nota = parseFloat(prompt("Digite a nota do aluno da turma 03"))
            mediaGeral += nota
            if(nota >= 7){notasMaiorMedia++}
        }
    }
    
    console.log("Quantidade de alunos com média acima de 7: "+notasMaiorMedia)
    console.log("Quantidade de Alunos: "+qtdAlunos)
    console.log("Soma das notas: "+mediaGeral)
    console.log("Média geral: "+(mediaGeral / qtdAlunos))
    return false;
}