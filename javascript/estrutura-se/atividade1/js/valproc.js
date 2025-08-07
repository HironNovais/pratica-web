function procFormulario(){
    //alert("Estou na função");
    let num1, num2, num3, media

    if(document.frmnotas.txtnum1.value==""){
        alert("Preenchar o campo nota 01");
        document.frmnotas.textnum1.focus();

        return false;
    }else if(document.frmnotas.txtnum2.value==""){
        alert("Preenchar o campo nota 02");
        document.frmnotas.textnum2.focus();

        return false;
    }else if(document.frmnotas.txtnum3.value==""){
        alert("Preenchar o campo nota 03");
        document.frmnotas.textnum3.focus();

        return false;
    }else{
        num1 = parseFloat(document.getElementById('num1').value);
        num2 = parseFloat(document.getElementById('num2').value);
        num3 = parseFloat(document.getElementById('num3').value);
        media = (num1+num2+num3) / 3;
        
        if(media>=7){
            alert("Aprovado: "+media.toFixed(2)+" Você foi aprovado!");
        }else if(media<7 &  media>5){
            alert("Recuperação: "+media.toFixed(2)+" Você está em recuperação!");
        }else{
            alert("Reprovado jamelão, média: "+media.toFixed(2));
        }
    }
    
    
}