function procFormulario(){
    //alert("Estou na função");
    let num1, num2, op, resultado

    op = document.frm_dados.ope.value

    if(document.frm_dados.txtnum1.value==""){
        alert("Preencha o primeiro número");
        document.frm_dados.textnum1.focus();

        return false;
    }else if(document.frm_dados.txtnum2.value==""){
        alert("Preencha o segundo número");
        document.frm_dados.textnum2.focus();

        return false;
    }else if(op!='+' & op!='-' & op!='*' & op!='/'){
        alert("Operação: "+op+" é Inválido!")
        return false;
    }else{
        num1 = parseFloat(document.getElementById('num1').value);
        num2 = parseFloat(document.getElementById('num2').value);

        if(op=='/' & num2==0){
            alert("Não é possível realizar divisão por zero!")
            return false;
        }else{
            switch(op){
                case '+':
                    resultado = num1 + num2
                break;
                case '-':
                    resultado = num1 - num2
                break;
                case '*':
                    resultado = num1 * num2
                break;
                case '/':
                    resultado = num1 / num2
                break;
                default:
                    console.log(`Sorry, we are out of ${op}.`);
                    alert("Operador inválido!")
                    return false;
                    op = 'op_err'
            }
            alert("Resultado: "+resultado)
        }



    }
    
    
}