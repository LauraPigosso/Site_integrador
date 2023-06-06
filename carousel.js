
const carousel = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');


const carouselItems = document.querySelectorAll('.carousel-item'); // Seleciona todos os elementos HTML com a classe "carousel-item" e retorna um NodeList
const numItems = carouselItems.length;
const itemsPerSlide = 0.7;// Define quantos itens sao exibidos por slide
let index = 0;

function movercarroselparadireita(e) {
  const movement = 1;    // Define o valor do deslocamento como 1

  // Atualiza o indice multiplicando o deslocamento pelo numero de itens exibidos por slide
  index += movement * itemsPerSlide;

  // Verifica se o indice é menor que 0
  if (index < 0) {
    index = numItems - itemsPerSlide;  // Se for, define o indice como o numero total de itens menos o numero de itens exibidos por slide
  } else if (index >= numItems) { 
    index = 0;
  }
  // Calcula a porcentagem de transformacao com base no indice
  const transformPercentage = -(index * 100 / numItems);
  // Aplica a transformacao no carrossel, movendo-o horizontalmente
  carousel.style.transform = `translateX(${transformPercentage}%)`;
}

function movercarroselparaesquerda(e) {
  const movement = -1;
  index += movement * itemsPerSlide;

  if (index < 0) {
    index = numItems - itemsPerSlide;
  } else if (index >= numItems) { 
    index -= numItems;
  }
  const transformPercentage = -(index * 100 / numItems);
  carousel.style.transform = `translateX(${transformPercentage}%)`;
}

// Adiciona um ouvinte de evento de clique ao botao "prevButton" para chamar a funcao "movercarroselparaesquerda"
prevButton.addEventListener('click', movercarroselparaesquerda);

// Adiciona um ouvinte de evento de clique ao botao "nextButton" para chamar a funcao "movercarroselparadireita"
nextButton.addEventListener('click', movercarroselparadireita);
