function filtrar() {
    fetch (API+"cadastro/" + document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").vaue)
        .then(res => res.json())
        .then(res => montartabela (res));
}

function montartabela(lista){

    var tabela =
    "<table border='1' align='center' width='80%' cellspacing='2'>" +
    "<tr>" +
    "<th>Data</th>" + 
    "<th>Alarme</th>"+
    "<th>Equipamento</th>"+
    "</tr>";

    for (cont=0;cont<lista.length;cont++){
        tabela+= 
        "<tr>" +
        "<td>" + lista[cont].titulo + "</td>" + 
        "<td>" + lista[cont].artista.nomeArtistico + "</td>" + 
        "<td>" + lista[cont].cadastro + "</td></tr>";
    }

    tabela+="</table>";
    document.getElementById("resultado").innerHTML=tabela;
}