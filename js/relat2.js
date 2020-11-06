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

function CriaPDF() {
    var minhaTabela = document.getElementById('resultado').innerHTML;
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
 
    // CRIA UM OBJETO WINDOW
    var win = window.open('', '', 'height=700,width=800');
    win.document.write('<html><head>');
    win.document.write('<title> EventDash - Relatório de Alarmes </title>');   // <title> CABEÇALHO DO PDF.
    win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');
    win.document.close();                                            // FECHA A JANELA
    win.print();                                                            // IMPRIME O CONTEUDO
}