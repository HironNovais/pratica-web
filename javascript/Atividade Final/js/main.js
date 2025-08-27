$( document ).ready(function() {
    /*$("#estruturas_condicionais_atv_1").click( function(){

    })*/
    $(".btn-acao").click( function(){

        let btn_clicado = $(this).attr("id"); // Pegar o btn clicado
        
        let row = $(this).closest("tr");

        // primeira coluna (nome da atividade)
        let nomeAtividade = row.find("td").eq(0).text().trim();
    
        // segunda coluna (descrição)
        let descricao = row.find("td").eq(1).text().trim();
    
        console.log("Nome:", nomeAtividade);
        console.log("Descrição:", descricao);
    });
});
