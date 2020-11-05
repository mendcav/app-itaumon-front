function login(){
   
    var mensagem = {
        racf: document.getElementById("email_login").value,
        email:document.getElementById("email_login").value,
        senha:document.getElementById("senha_login").value

    };
    
    var cabecalho={
        method:'POST',
        body:JSON.stringify(mensagem),
            headers:{
                'Content-Type':'application/json'
            }
    }

    fetch("http://localhost:8080/login", cabecalho)
        .then(res => res.json ())
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res));
            window.location="usuario.html";
            //alert(res.email);
        })
        .catch(err => {
            alert ("Não foi possivel realizar o login, por favor verifique usuario e senha");
        })
}  






