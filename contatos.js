const formulario = document.getElementById("info")//variavel que não pode ser alterada
//var formularioVar = document.getElementById("info") // pode ser alterada
//let formularioLet = document.getElementById("info") // e temporario

formulario.addEventListener("submit", function (event) {
    event.preventDefault()// desligando o eveto padrão do formulario

    var nome = document.getElementById("nome").value
    var email= document.getElementById("email").value
    var assunto = document.getElementById("assunto").value
    var mensagem = document.getElementById ("mensagem").value


    

    window.location.href =
     "envio.html" + 
     "?nome=" + encodeURIComponent (nome)+ 
     "&email" + encodeURIComponent (email) + 
     "&assunto" + encodeURIComponent (assunto) + 
     "&mensagem" + encodeURIComponent (mensagem)

                           

    console.log(nome)
    alert(nome+ " | "+ email + " | " + assunto + " | " + mensagem)
})


