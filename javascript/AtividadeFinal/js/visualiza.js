$( document ).ready(function() {
    document.getElementById("nomeAtividade").innerText = localStorage.getItem("nomeAtividade")//+' - '+ localStorage.getItem("estrutura");
    document.getElementById("descricaoAtividade").innerText = localStorage.getItem("descricaoAtividade") 
    //document.getElementById("link").innerText = localStorage.getItem("link");    
})

function voltar(){
    window.open('index.html', '_self')
}

function voltarCodigo(){
    window.open(localStorage.getItem("link"), '_self')
}