const wrapper = document.querySelector('.carousel-testimonials');
const dotsContainer = document.querySelector('.dots-container');

const depoimentos = document.querySelectorAll('.carousel-testimonials .card');
const totalSlides = depoimentos.length;

let currentIndex = 0;

// Criar os dots dinamicamente
dotsContainer.innerHTML = ''; // Limpa dots estáticos se houver
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    const offset = -(currentIndex * 100);
    wrapper.style.transform = `translateX(${offset}%)`;

    // Atualiza os dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Troca automática a cada 3 segundos
setInterval(nextSlide, 3000);