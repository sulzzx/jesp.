var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Data Analyst", "Youtuber", "Brazillian"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}) 

function mostrarLista() {
  const lista = document.getElementById("minhaLista");
  
  // Força um reflow para garantir que a transição ocorra
  void lista.offsetWidth;
  
  // Aplica apenas a classe mostrar (sem outras classes de animação)
  lista.classList.toggle("mostrar");
  
  // Remove explicitamente quaisquer classes de animação
  lista.classList.remove("slideTop", "slideBottom", "slideLeft", "slideRight");
}

// Fechar ao clicar fora (opcional)
document.addEventListener('click', function(event) {
  const lista = document.getElementById("minhaLista");
  const toggleBtn = document.querySelector('.toggle');
  
  if (!lista.contains(event.target) && event.target !== toggleBtn) {
    lista.classList.remove("mostrar");
  }
});
