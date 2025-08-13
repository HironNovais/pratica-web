function procDados(){
    let soma=0
    console.clear()
    v1 = parseInt(document.getElementById("inptVal1").value)
    v2 = parseInt(document.getElementById("inptVal2").value)
    v3 = parseInt(document.getElementById("inptVal3").value)

    if(v1%5==0 & v1 > 0){soma+=v1}
    if(v2%5==0 & v2 > 0){soma+=v2}
    if(v3%5==0 & v3 > 0){soma+=v3}

    console.log("Soma dos valores: "+soma)

    return false;
}