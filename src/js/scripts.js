   // Máscara para telefone brasileiro
   const telefoneInput = document.getElementById("telefone");
   telefoneInput.addEventListener("input", function () {
     let value = this.value.replace(/\D/g, "");
     value = value.replace(/(\d{2})(\d)/, "($1) $2");
     value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
     this.value = value;
   });

   // Submissão do formulário
   document.getElementById("form").addEventListener("submit", function (e) {
     e.preventDefault();
     const nome = document.getElementById("nome").value;
     document.getElementById("lead-form").classList.add("d-none");
     document.getElementById("product-page").classList.remove("d-none");
     document.getElementById("nao-logado").classList.add("d-none");
     document.getElementById("logado").classList.remove("d-none");
     document.getElementById("welcome").innerText = `Bem-vindo, ${nome}!`;
   });

   // Sticky Header
   window.addEventListener("scroll", function () {
     document.getElementById("main-header").classList.toggle("sticky", window.scrollY > 50);
   });

   // Troca de imagem no hero
   document.querySelectorAll(".thumb").forEach((thumb) => {
     thumb.addEventListener("click", () => {
       document.getElementById("mainImage").src = thumb.dataset.src;
     });
   });

   // Modal da galeria
   document.querySelectorAll(".gallery-img").forEach((img) => {
     img.addEventListener("click", () => {
       document.getElementById("modalImage").src = img.src;
     });
   });

   // Countdown Timer
   const countdown = document.getElementById("countdown");
   let time = 5 * 60; // 5 minutos
   setInterval(() => {
     const minutes = Math.floor(time / 60);
     const seconds = time % 60;
     countdown.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
     if (time > 0) time--;
   }, 1000);