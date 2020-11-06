function filtrar() {
    fetch (API+"/data/" + document.getElementById("datainicio").value + 
    "/" + document.getElementById("datafim").value)
        .then(res => res.json())
        .then(res => montartabela (res));
}

function montartabela(lista){

    var tabela =
    "<table class='table' border='1' align='center' width='80%' cellspacing='2'>" +
    "<tr>" +
    "<th>Data</th>" + 
    "<th>Alarme</th>"+
    "<th>Equipamento</th>"+
    "</tr>";

    for (cont=0;cont<lista.length;cont++){
        tabela+= 
        "<tr>" +
        "<td>" + lista[cont].data + "</td>" + 
        "<td>" + lista[cont].alarme.nome + "</td>" + 
        "<td>" + lista[cont].equipamento.hostnome + "</td></tr>";
    }

    tabela+="</table>";
    document.getElementById("resultado").innerHTML=tabela;
}