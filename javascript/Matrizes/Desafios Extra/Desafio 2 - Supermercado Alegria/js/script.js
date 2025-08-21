

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
    for(let l=0; l<3; l++){
        clientes[l] = clientes[l]+' '.repeat(maiorNome - clientes[l].length);
    }
    console.log("Valores Comprados")
    let impressao
    for(let i=0; i<valores.length; i++){
        impressao = clientes[i]
        for(let c=0; c<3; c++){
            impressao +=" | Mês 0"+(c+1)+": "+valores[i][c]
        }
        console.log(impressao)
    }
    
    return false;
}