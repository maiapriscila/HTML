function login(){
    var usuario = document.getElementById("usuario").valeu;
    var senha = document.getElementById("senha").value;
    if (usuario == "adm" && senha === "123adm") {
        alert ("login bem sucedido!")
    }else {
        alert ("nome de usuario ou senha incorretos!");
    }
    }
