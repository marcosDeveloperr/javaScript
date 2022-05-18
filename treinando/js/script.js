alert("script básico");  

var data = new Date();//pergutar ao navegador a data e a hora
alert("Eitaaaa hoje é: " + data); //formato muito extenso..

//estrutura de html via javaScript
//ja tenho variavel data
//via console no navegador.
//document.body.innerHTML = "<h3> Data:" + data + "</h3>";
//document.body.innerHTML = "<h3> dia/mes/ano - " + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + "</h3>";

//via html usando o defer após do tag body
    data = new Date(); //perguntar o navegador a data
    document.body.innerHTML ="<h2>Data: " + data + "</h2>"; //data extensao
    document.body.innerHTML ="<h2>Data: " + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + "</h2>" //data melhor formato
