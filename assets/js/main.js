/*alert("TODO CONECTADO...")*/

/*También sirve:
var mensaje = "TODO CONECTADO..."
alert(mensaje)*/ /*esto es para que salga el cuadro de mensaje al iniciar la página*/



    let nota1 = prompt("ingrese la nota 1 de HTML:")
    nota1 = parseFloat(nota1)
    document.getElementById("nota1html").textContent = nota1.toFixed(1);

    let nota2 = prompt("ingrese la nota 2 de HTML:")
    nota2 = parseFloat(nota2)
    document.getElementById("nota2html").textContent = nota2.toFixed(1);

    let nota3 = prompt("ingrese la nota 3 de HTML:")
    nota3 = parseFloat(nota2)
    document.getElementById("nota3html").textContent = nota3.toFixed(1);


    let nota1css = prompt("ingrese la nota 1 de CSS:")
    nota1css = parseFloat(nota1css)
    document.getElementById("nota1css").textContent = nota1css.toFixed(1);

    let nota2css = prompt("ingrese la nota 2 de CSS:")
    nota2css = parseFloat(nota2css)
    document.getElementById("nota2css").textContent = nota2css.toFixed(1);

    let nota3css = prompt("ingrese la nota 3 de CSS:")
    nota3css = parseFloat(nota3css)
    document.getElementById("nota3css").textContent = nota3css.toFixed(1);


    let nota1JavaScript = prompt("ingrese la nota 1 de JavaScript:")
    nota1JavaScript = parseFloat(nota1JavaScript)
    document.getElementById("nota1JavaScript").textContent = nota1JavaScript.toFixed(1);

    let nota2JavaScript = prompt("ingrese la nota 2 de JavaScript:")
    nota2JavaScript = parseFloat(nota2JavaScript)
    document.getElementById("nota2JavaScript").textContent = nota2JavaScript.toFixed(1);

    let nota3JavaScript = prompt("ingrese la nota 3 de JavaScript:")
    nota3JavaScript = parseFloat(nota3JavaScript)
    document.getElementById("nota3JavaScript").textContent = nota3JavaScript.toFixed(1);
    
    
    var promedioHTML = ( nota1 + nota2 + nota3 ) / 3
    document.getElementById("promedioHTML").textContent = promedioHTML.toFixed(1)

    var promedioCSS = ( nota1css + nota2css + nota3css ) / 3
    document.getElementById("promedioCSS").textContent = promedioCSS.toFixed(1)

    var promedioJavaScript = ( nota1JavaScript + nota2JavaScript + nota3JavaScript ) / 3
    document.getElementById("promedioJavaScript").textContent = promedioJavaScript.toFixed(1) 