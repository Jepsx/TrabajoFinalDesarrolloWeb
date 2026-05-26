// Inicializar Iconos
lucide.createIcons();

// Carrusel
const slides = [
    { src: "./img/mountain-botafogo-beach-rio-de-janeiro-brazil 1.webp", title: {es: "Rio de Janeiro", en: "Rio de Janeiro"} },
    { src: "./img/iguazu.webp", title: {es: "Cataratas del Iguazú", en: "Iguazu Falls"} },
    { src: "./img/saoPaulo.webp", title: {es: "São Paulo", en: "São Paulo"} }
];

let currentIdx = 0;
const imgEl = document.getElementById('carousel-img');
const titleEl = document.getElementById('carousel-title');

// Función para cambiar a la siguiente imagen
function nextSlide() {
    currentIdx = (currentIdx + 1) % slides.length;
    updateSlide(currentIdx);
}

function updateSlide(idx, animate = true) {
    if(animate) imgEl.style.opacity = '0';
    setTimeout(() => {
        imgEl.src = slides[idx].src;
        titleEl.textContent = slides[idx].title[currentLang || 'es']; 
        if(animate) imgEl.style.opacity = '1';
    }, animate ? 300 : 0);
}

// Configuración del Timer 
let autoPlay = setInterval(nextSlide, 6000);

// Eventos de botones
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + slides.length) % slides.length;
    updateSlide(currentIdx);
    resetTimer(); // Reinicia el tiempo si el usuario hace clic manualmente
});

document.getElementById('next-btn').addEventListener('click', () => {
    nextSlide();
    resetTimer(); // Reinicia el tiempo si el usuario hace clic manualmente
});

// Función para reiniciar el temporizador cuando el usuario interactúa
function resetTimer() {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 6000);
}
