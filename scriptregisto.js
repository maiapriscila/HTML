    function login(){
        var user = document.getElementById("usuario").value;
        var senh4 = document.getElementById("senha").value;
    
        if (user === "adm@adm" && senh4 === "123teste"){
            alert("teste 1");
        }else {
            alert("teste2");
        }
    }