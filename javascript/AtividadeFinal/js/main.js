$( document ).ready(function() {
    

    $(".btn-acao").click( function(event){

        let btn_clicado = $(this).attr("id"); // Pegar o btn clicado
        
        let row = $(this).closest("tr");
        let nomeAtividade = row.find("td").eq(0).text().trim();
        let descricao = row.find("td").eq(1).text().trim();
        let codigo = row.find("td").eq(3).text().trim();

        location.replace("./visualiza_atv_1_if.html")

        localStorage.setItem("nomeAtividade", nomeAtividade);
        localStorage.setItem("descricaoAtividade", descricao);
        localStorage.setItem("codigo", codigo)
                
    });
});
