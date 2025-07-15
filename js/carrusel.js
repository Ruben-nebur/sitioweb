
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Arrastre con el ratón
  let startX = 0;
  let isDragging = false;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    track.style.cursor = 'grabbing';
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.pageX - startX;
    track.style.cursor = 'grab';

    if (diff > 50) {
      index = (index - 1 + slides.length) % slides.length;
    } else if (diff < -50) {
      index = (index + 1) % slides.length;
    }
    updateCarousel();
  });

  // Para que se ajuste al cambiar el tamaño de pantalla
  window.addEventListener('resize', updateCarousel);

  // Al cargar la página
  window.addEventListener('load', updateCarousel);

