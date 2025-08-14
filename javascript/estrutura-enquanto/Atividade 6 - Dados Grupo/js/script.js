function procDados(){
    /*Você criará um algoritmo que peça a idade, o gênero e o salário de um grupo de 
pessoas. Quando o usuário quiser sair e encerrar o programa, ele deve digitar 
“Finalizar”. Não se esqueça de validar para que o usuário digite exatamente 
“Finalizar”. Ao final, você deve apresentar ao usuário:

● A média de salário do grupo;
● A média de todas as idades;
● A média de salário do gênero feminino;
● A média de salário do gênero masculino.*/
    let qtd=0, idade=0, genero='', qtd_fem=0, qtd_masc=0, salarioF=0, salarioM=0, continuar=''
    console.clear()
    while(continuar!='Finalizar'){
        qtd++
        idade += parseInt(prompt("Digite sua idade: "))
        if(prompt("Digite seu genero, 'M' para Masculino 'F' para Feminino: ").toLocaleLowerCase()=='m'){
            qtd_masc++
            salarioM += parseFloat(prompt("Digite seu salário: "))
        }else{
            qtd_fem++
            salarioF += parseFloat(prompt("Digite seu salário: "))
        }

        continuar = prompt("Desajar continuar a inserção de dados? Digite 'S' para continuar e 'Finalizar' para sair e verificar o resultado")
    }

    console.log("Média de salário do grupo: "+((salarioM+salarioF) / qtd))
    console.log("Média de todas as idades: "+(idade / qtd))
    console.log("Média salárial Feminina: "+(salarioF / qtd_fem))
    console.log("Média salárial Masculina: "+(salarioM / qtd_masc))

    return false;
}