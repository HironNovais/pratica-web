function envioFaleConosco(){

    const regNome = /^[^\s]+[A-zÀ-ü]{2,}$/g
    let nome = document.getElementById("id_nome").value;
    if(regNome.test(nome)){
        alert("Nome deve ter no mínimo dois caracteres!")
        return false;
    }

    const regFone = /^[(]{1}[1-9]{2}[)]{1}[1-9]{5}[-]{1}[1-9]{4}$/g
    let fone = document.getElementById("id_fone").value;
    if(!regFone.test(fone)){
        alert("Telefone inválido!")
        return false;
    }

    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    let email = document.getElementById("id_email").value;
    if(!regEmail.test(email)){
        alert("Email inválido!")
        return false;
    }

    return false;
}