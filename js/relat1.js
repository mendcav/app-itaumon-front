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
    win.document.write('<title> EventDash - Relatório de Eventos </title>');   // <title> CABEÇALHO DO PDF.
    win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');
    win.document.close();                                            // FECHA A JANELA
    win.print();                                                            // IMPRIME O CONTEUDO
}

function exportar() {
 
    fetch(API+"/data/" +
    document.getElementById("datainicio").value + 
    "/" + document.getElementById("datafim").value)
        .then(res => res.json())
        .then(res => gerarCSV(res));
 
}
 
function gerarCSV(lista) {
   
    let relatorio = document.getElementById("lista");
 
    if (lista == null || lista.lenght == 0) {
        relatorio.innerHTML = `<p>Nenhum registro encontrado.</p>`;
        return;
    }
    
    let csv = "";
    
    lista.forEach(resultado => {
       // csv += `${e.campo1};${e.campo2};${e.campo3};\n`;
        csv += `${resultado.data};${resultado.alarme.nome};${resultado.equipamento.hostnome}\n`;        
    });
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'solicitacoes.csv'
    hiddenElement.click();

    
 
}