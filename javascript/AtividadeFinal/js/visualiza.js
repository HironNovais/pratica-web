$( document ).ready(function() {
    
    document.getElementById("nomeAtividade").innerText = localStorage.getItem("nomeAtividade");
    document.getElementById("descricaoAtividade").innerText = localStorage.getItem("descricaoAtividade");
    document.getElementById("codigo").innerText = localStorage.getItem("codigo");
    
})