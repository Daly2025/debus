/* ============================
   SCROLL SUAVE EN ANCLAS
============================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* ============================
   MENÚ HAMBURGUESA
============================ */
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

/* ============================
   GALERÍA LIGHTBOX + EFECTOS
============================ */
const images = document.querySelectorAll('.gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

// Mostrar imagen con animación
function showImage(index) {
    currentIndex = index;

    // Reiniciar animación
    lightboxImg.classList.remove("fade-slide");
    void lightboxImg.offsetWidth;
    lightboxImg.classList.add("fade-slide");

    lightboxImg.src = images[index].src;
    lightbox.classList.add('active');
}

// Abrir lightbox al hacer clic en una imagen
images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Siguiente imagen
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Imagen anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

/* ============================
   NAVEGACIÓN CON TECLADO
============================ */
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === "Escape") {
        lightbox.classList.remove('active');
    }

    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
});
