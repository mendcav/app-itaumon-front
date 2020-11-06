/*function preencherMusicas(lista){
    var tabela =
    "<table border='1' align='center' width='80%' cellspacing='2'>" +
    "<tr>" +
    "<th>Musica</th>" + 
    "<th>Artista</th>"+
    "<th>Cadastro</th>"+
    "</tr>";

    for (cont=0;cont<lista.length;cont++){
        tabela+= "<tr>"+
        "<td>" + lista[cont].titulo + "</td>" +
        "<td>" + lista[cont].artista.nomeArtistico + "</td>" +
        "<td>" + lista[cont].cadastro + "</td></tr>"
    }

    tabela+="</table>";
    document.getElementById("resultado").innerHTML=tabela;
}

function filtrar(){
    var valor =  document.getElementById("cmblancamento").value;
    fetch("http://localhost:8080/lancamento/" + valor)
        .then(res=>res.json())
        .then(res=>preencherMusicas(res))
        .catch(err => {
            window.alert("Musica não encontrada!");
        });
}

function filtrar(){
    if (cmblancamento.value =1) 
        <a href="telarel1.html" aling="right" type="button" class="btn btn-primary btn-lg">Logout</a>
    else
        <a href="index.html" aling="right" type="button" class="btn btn-primary btn-lg">Logout</a>

    };*/


function carregarusuario(){
    var usuario = localStorage.getItem("usuariologado");
    if(usuario==null){
        window.location="index.html"
    }else{
        var usuarioJson = JSON.parse(usuario);
        document.getElementById("foto").innerHTML=
        "<img width='100%' heigth='100%' alt='Sem foto' src=imagens/" + usuarioJson.foto + ">";
        
        document.getElementById("dados").innerHTML=
        "<h5>Nome: " + usuarioJson.nome + 
        "<br>RACF: " + usuarioJson.racf + 
        "<br>Email: " + usuarioJson.email + "</h5>";
    }
}

function logar(){
    var usuario = {
        email : document.getElementById("txtemail").value ,
        senha : document.getElementById("txtsenha").value 
    };

    var conteudo = {
        method : "POST",
        body : JSON.stringify(usuario),
        headers : {
            "Content-type":"application/json"
        }
    };

    fetch(API+"/login", conteudo)
        .then(res => res.json())
        .then(res => {
            window.alert("Seja bem vindo, " + res.nome + "!");
            localStorage.setItem("usuariologado", JSON.stringify(res));
            window.location ="usuario.html";
        })
        .catch(err => 
            {window.alert("Usuário/Senha inválidos");
        });

}
