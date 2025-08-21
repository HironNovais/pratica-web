

function enviaDados(event){
    event.preventDefault();
    /*Super mercdao. */
    console.clear()
    let valores = [], clientes = []
    let qtd = 0, linha = 0
    
    for(let i=0; i < 3; i++){
        valores[i] = []
        clientes[i] = prompt("Digite o nome do cliente: ")
        for(let c=0; c<3; c++){
            valores[i][c] = parseInt(prompt("Digite o valor da compra do mês "+(c+1)+": "))
            if(valores[i][c] == null){ valores[i][c] }
        }
    }
    localStorage.setItem("valores", JSON.stringify(valores));
    localStorage.setItem("clientes", JSON.stringify(clientes));

    return false;
}

function listaCompras(event){
    event.preventDefault();
    let valores = JSON.parse(localStorage.getItem("valores")) || [];
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    let maiorNome = Math.max(...clientes.map(e => e.length));
    let media = 0, qtd = 0
    for(let l=0; l<3; l++){
        clientes[l] = clientes[l]+' '.repeat(maiorNome - clientes[l].length);
    }
    console.log("Valores Comprados")
    let impressao
    for(let i=0; i<valores.length; i++){
        impressao = clientes[i]
        media = 0, qtd = 0
        for(let c=0; c<3; c++){
            impressao +=" | Mês 0"+(c+1)+": "+valores[i][c]
            if(valores[i][c] != 0){
                media += valores[i][c]
                qtd++
            }
            if(c==2){
                media = media / qtd
                impressao +=" | Média de compras: "+media.toFixed(2)+" | Qtd de Compras: "+qtd
            }
        }
        console.log(impressao)
    }
    
    return false;
}

function consultaCliente(event){
    event.preventDefault();
    let valores = JSON.parse(localStorage.getItem("valores")) || [];
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    let continuar = true
    let escolha =''
    let posi
    console.log(clientes)
    do{
        escolha = prompt("Digite o nome de um cliente para ver o histórico de compra ou digite 0 para sair: ")
        for(let i=0; i<3; i++){
            if(escolha == clientes[i]){
                posi = i
                continuar = false
            }
        }
        if(escolha == '0'){ continuar = false }
        if(continuar == true){alert("Cliente não encontrado!")}
    }while(continuar)
    
    let impressao
    impressao = clientes[posi]
    media = 0, qtd = 0
    for(let c=0; c<3; c++){
        impressao +=" | Mês 0"+(c+1)+": "+valores[posi][c]
        if(valores[posi][c] != 0){
            media += valores[posi][c]
            qtd++
        }
        if(c==2){
            media = media / qtd
            impressao +=" | Média de compras: "+media+" | Qtd de Compras: "+qtd
        }
    }
    console.log("Valores de Compra do Cliente escolhido!")
    console.log(impressao)
    return false;
}