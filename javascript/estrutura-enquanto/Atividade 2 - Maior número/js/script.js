function calcMedia(){
    let v1=0, v2=0, v3=0, valorMaior=0
    let maiorCampo = ""
    console.clear()
    v1 = parseInt(document.getElementById("inptVal1").value)
    v2 = parseInt(document.getElementById("inptVal2").value)
    v3 = parseInt(document.getElementById("inptVal3").value)
    if(v1 == v2 & v3 < v1 & v3 < v2){ console.log("Valor 01: "+v1+" e Valor 02: "+v2+" São iguais! Maior valor: "+v1); return false; }
    if(v1 == v3 & v2 < v1 & v2 < v3){ console.log("Valor 01: "+v1+" e Valor 03: "+v3+" São iguais! Maior valor: "+v1); return false; }
    if(v3 == v2 & v1 < v3 & v1 < v2){ console.log("Valor 02: "+v3+" e Valor 03: "+v2+" São iguais! Maior valor: "+v3); return false; }

    if(v1 > valorMaior & v1 != valorMaior){valorMaior = v1; maiorCampo = "Valor 1" }
    if(v2 > valorMaior & v2 != valorMaior){valorMaior = v2; maiorCampo = "Valor 2" }
    if(v3 > valorMaior & v3 != valorMaior){valorMaior = v3; maiorCampo = "Valor 3" }

    console.log(maiorCampo+" | Maior valor: "+valorMaior)

    return false;
}