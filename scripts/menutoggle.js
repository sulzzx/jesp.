function mostrarLista2() {
  const navbar = document.querySelector(".navbar");

  // alterna a classe active
  navbar.classList.toggle("active");
}

// Fecha ao clicar fora (apenas mobile)
document.addEventListener("click", function(event) {
  const navbar = document.querySelector(".navbar");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (window.innerWidth <= 768) {
    if (!navbar.contains(event.target) && event.target !== toggleBtn) {
      navbar.classList.remove("active");
    }
  }
});
