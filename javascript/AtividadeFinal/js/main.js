$( document ).ready(function() {
    

    $(".btn-acao").click( function(){

        let btn_clicado = $(this).attr("id"); // Pegar o btn clicado
        
        let row = $(this).closest("tr");
        let nomeAtividade = row.find("td").eq(0).text().trim();
        let descricao = row.find("td").eq(1).text().trim();
        let codigo=''
        try {
            const response = fetch('../AtividadeFinal/codigoAtividades/'+btn_clicado+'.txt',).then(response => response.text()).then(text => {
            localStorage.setItem("nomeAtividade", nomeAtividade);
            localStorage.setItem("descricaoAtividade", descricao);
            localStorage.setItem("codigo", text)
        })
        } catch (error) {
            alert("Erro ao abrir atividade!");
            return false;
        }

        window.location.href = "visualiza.html";
        
    });
});
