var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Data Analyst", "Youtuber", "Brazillian"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}) 

function mostrarLista() {
  const lista = document.getElementById("minhaLista");
  lista.classList.toggle("mostrar");
}
