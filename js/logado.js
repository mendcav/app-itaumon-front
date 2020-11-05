function carregarUsuario(){
    var userString=localStorage.getItem("user");
    if (!userString){
        window.location="index3.html";
    }else {
    
        atualizarUsuario()
        carregarDepartamentos()
        var user=JSON.parse(userString);
            
        document.getElementById("perfil").innerHTML=
        "<h2>" + "Colaborador: "+ user.nomeColab + "</h2>" +
        "<h2>" + "Email: "+ user.email + "<br>" +
        "<h2>" + "RACF: "+ user.racf + "<br>" +
        "<h2>" + "Notebook: "+ user.descEquip + "<br>" +
        "<h2>" + "Numero de série: "+ user.numEquip + "<br>" +
        "<h2>" + "Conector:  " + user.numConectRede + "<br>" +
        "<h2>" + "Departamento: "+ user.departamento.nomeDepart + "<br>" +
        "<h2>" + "Atualmente: "+ user.departamento.nomeVlan + "<br>" + "<br> <h2> ";

        document.getElementById("fotoUsuario").innerHTML=
        "<img src="+ user.foto +" width='20%'>"

    var strHistorico = '<div class="row>'+ '<div class="col-12>'+
                        '<table border="1" cellpading="5" cellspacing="2" width="80%" aling="center">'+
                        '<tr>'+
                                '<td>Solicitação</td>'+
                                '<td>Data Solicitação</td>'+
                                '<td>Alterado para o Departamento</td>'+
                        '</tr>';
                       
                        for (i=0; i<user.historicos.length; i++){
                strHistorico+='<tr>'+
                                '<td>'+user.historicos[i].idHistorico+'</td>'+
                                '<td>'+user.historicos[i].dataSolic+'</td>'+
                                '<td>'+user.historicos[i].departamento.nomeDepart+'</td>'+
                            '</tr>';    
                        }
                            
                            strHistorico+='</table>'+
                            '</div>' +
                         '</div>'
        
        document.getElementById("historico").innerHTML=strHistorico;

       
            }




}

function carregarDepartamentos(){
   
     
    var cabecalho={
        method:'GET',
        headers:{
                'Content-Type':'application/json'
            }
    }

    fetch("http://localhost:8080/departamento", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("departamentos", JSON.stringify(res));
           console.log(res)
        })
        .catch(err => {
            alert ("Não foi possivel carregar departamentos, por favor conexao");
        })
}  


function atualizarUsuario(){

    var userString=localStorage.getItem("user");
    var user=JSON.parse(userString);

    var cabecalho={
        method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
    }

    fetch("http://localhost:8080/colaborador/" + user.idColab, cabecalho)
        .then(res => res.json ())
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res));
        })
        .catch(err => {
            alert ("Não foi possivel realizar o login, por favor verifique usuario e senha");
        })
}

                    
function solicitarMudanca(){
    
    var userString=localStorage.getItem("user");
    var departamentos=localStorage.getItem("departamentos");

    if (!userString){
        window.location="index3.html";
    }else {

    var user=JSON.parse(userString);
    departamentos = JSON.parse(departamentos);

    var codDepto = document.getElementById("departamento").value;

    var deptoSelecionado = departamentos.find(i => i.idDepart == codDepto);

    var mensagem = {
        colaborador:{
                    idColab: user.idColab,
                    email: user.email
                },
        departamento:{
                    idDepart: deptoSelecionado.idDepart,
                    nomeDepart: deptoSelecionado.nomeDepart , 
                    nomeVlan: deptoSelecionado.nomeVlan, 
                    rede: deptoSelecionado.rede
                },
                justificativa:  document.getElementById("txtJustificativa").value   
    };
    
    var cabecalho={
        method:'POST',
        body:JSON.stringify(mensagem),
            headers:{
                'Content-Type':'application/json'
            }
    }

    fetch("http://localhost:8080/colaborador/solicitarMudanca", cabecalho)
    .then(res => res.json())    
    .then(res => {
           incluirHistorico(res)
        })
        .catch(err => {
            alert ("Não foi possivel realizar a solicitacao de mudanca");
        })
    }
}


function incluirHistorico( res ){


    var mensagem = {
        colaborador: res.colaborador,
        comandos: res.comandos,
        dataSolic: res.dataSolic,
        departamento: res.departamento,
        justificativa: res.justificativa,
    };
    
    console.log(JSON.stringify(mensagem))
    var cabecalho={
        method:'POST',
        body:JSON.stringify(mensagem),
            headers:{
                'Content-Type':'application/json'
            }
    }

    fetch("http://localhost:8080/historico/incluirHistorico", cabecalho)
    .then(res => res.json())    
    .then(res => {
            alert ("Solicitacao realizada!");
            window.location="colaborador.html";
            
        })
        .catch(err => {
            alert ("Não foi possivel realizar a solicitacao de mudanca");
        })
    }




