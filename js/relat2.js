function filtrarcontagem() {
    fetch (API+"/contador/" + document.getElementById("datainicio").value + 
    "/" + document.getElementById("datafim").value)
        .then(res => res.json())
        .then(res => montartabelacontagem (res));
}

function montartabelacontagem(lista){

    var tabela =
    "<table class='table' border='1' align='center' width='80%' cellspacing='2'>" +
    "<tr>" +
    "<th>Alarme</th>" + 
    "<th>Quantidade no periodo</th>"+
    "</tr>";

    for (cont=0;cont<lista.length;cont+=2){
        tabela+= 
        "<tr>" +
        "<td>" + lista[cont] + "</td>" + 
        "<td>" + lista[cont+1] + "</td></tr>";
    }

    tabela+="</table>";
    document.getElementById("resultado").innerHTML=tabela;
}