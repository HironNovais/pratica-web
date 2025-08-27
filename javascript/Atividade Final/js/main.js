$( document ).ready(function() {
    /*$("#estruturas_condicionais_atv_1").click( function(){

    })*/
    $(".btn-acao").click( function(){

        let btn_clicado = $(this).attr("id"); // Pegar o btn clicado
        
        var table = document.getElementById(tbl_for);
        var rows = table.getElementsByTagName('tr');
        let val = table.rows[this.i].cells[1].innerHTML;
        console.log(val)
    });
});
