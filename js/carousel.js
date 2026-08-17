const slides = [
  {
    src: 'img/imagem_1.jpg',
    caption: 'Esta é a nova Ranger Ford 2022. Verifique novidades.'
  },
  {
    src: 'img/imagem_2.jpg',
    caption: 'Ford a nossa história.'
  },
  {
    src: 'img/imagem_3.jpg',
    caption: 'Nova Ford Bronco Sport 2022.'
  }
];

let currentIndex = 0;
let carouselTimer = null;
const TEMPO_TROCA = 5000; 

function atualizarSlide(index) {
  const imgElement = document.getElementById('carousel-img');
  const captionElement = document.getElementById('carousel-caption');

  if (!imgElement || !captionElement) return;

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  imgElement.src = slides[currentIndex].src;
  captionElement.textContent = slides[currentIndex].caption;
}

function mudarImagem(direcao) {
  atualizarSlide(currentIndex + direcao);
  reiniciarTimer();
}

function iniciarTimer() {
  carouselTimer = setInterval(() => {
    atualizarSlide(currentIndex + 1);
  }, TEMPO_TROCA);
}

function reiniciarTimer() {
  clearInterval(carouselTimer);
  iniciarTimer();
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarTimer();
});