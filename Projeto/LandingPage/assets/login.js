/* Função de alert para quando usuário enviar cadastro */
function myFunction() {
  alert("Cadasto realizado com sucesso!");
}


/* preventDefault utilizado para evitar recarregamento da página ao realizar o cadastro */
document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault()
});