window.onload = function () {
  // Capturando todos os elementos com a classe 'product'
  var products = document.querySelectorAll('.product');

 
  products.forEach(function (product) {
    var minusButton = product.querySelector('.menos'); // botao de diminuir quantidade
    var plusButton = product.querySelector('.mais'); // botao de aumentar quantidade
    var quantitySpan = product.querySelector('.quantidade'); // Capturando o elemento que exibe a quantidade
    var quantity = 0; // Inicializando a quantidade como zero

    // botao de diminuir quantidade
    minusButton.addEventListener('click', function () {
      quantity = Math.max(0, quantity - 1); // Reduzindo a quantidade em 1, com valor minimo de zero
      quantitySpan.textContent = quantity; // Atualizando o texto exibido da quantidade
      updateTotal(); // Chamando a funcao para atualizar o valor total
    });

    //clique do botao de aumentar quantidade
    plusButton.addEventListener('click', function () {
      quantity = quantity + 1; // Aumentando a quantidade em 1
      quantitySpan.textContent = quantity; // Atualizando o texto exibido da quantidade
      updateTotal(); // Chamando a funcao para atualizar o valor total
    });
  });

  // atualizar o valor total
  function updateTotal() {
    var totalQuantity = 0; // quantidade total como zero
    var totalValue = 0; // valor total como zero

   
    products.forEach(function (product) {
      var quantity = parseInt(product.querySelector('.quantidade').textContent); // Obtendo a quantidade do produto
      var price = parseFloat(product.querySelector('.product-price').textContent.replace('$', '')); // Obtendo o preco do produto
      totalQuantity += quantity; // Somando a quantidade do produto pela quantidade total
      totalValue += quantity * price; // Somando o preco do produto ao valor total
    });

    // Atualizando os elementos que exibem a quantidade total e o valor total
    document.querySelector('#quantidade-total').textContent = totalQuantity;
    document.querySelector('#valor-total').textContent = '$' + totalValue.toFixed(2);
  }
};

function resetData() {
  var products = document.querySelectorAll('.product');

  products.forEach(function (product) {
    var quantitySpan = product.querySelector('.quantidade');
    quantitySpan.textContent = '0';
  });


  document.querySelector('#quantidade-total').textContent = '0';
  document.querySelector('#valor-total').textContent = '$0.00';
  quantity = 0; // Reiniciar a quantidade para zero


  Swal.fire({ 
    title: 'SUA COMPRA FOI FINALIZADA, OBRIGADA POR COMPRAR!',
    width: 600,
    padding: '3em',
    color: '#716add',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.pinimg.com/originals/02/b1/d5/02b1d5da9088c69b2e4550a1dcfde9fa.gif")
      left top
      no-repeat
    `
  }).then(function() {
    window.location.reload(true)
});
}