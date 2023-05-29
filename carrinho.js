window.onload = function () {
  var products = document.querySelectorAll('.product');
  products.forEach(function (product) {
    var minusButton = product.querySelector('.menos');
    var plusButton = product.querySelector('.mais');
    var quantitySpan = product.querySelector('.quantidade');
    var quantity = 0;

    minusButton.addEventListener('click', function () {
      quantity = Math.max(0, quantity - 1);
      quantitySpan.textContent = quantity;
      updateTotal();
    });

    plusButton.addEventListener('click', function () {
      quantity = quantity + 1;
      quantitySpan.textContent = quantity;
      updateTotal();
    });
  });

  function updateTotal() {
    var totalQuantity = 0;
    var totalValue = 0;
    products.forEach(function (product) {
      var quantity = parseInt(product.querySelector('.quantidade').textContent);
      var price = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
      totalQuantity += quantity;
      totalValue += quantity * price;
    });
    document.querySelector('#quantidade-total').textContent = totalQuantity;
    document.querySelector('#valor-total').textContent = '$' + totalValue.toFixed(2);
  }
};
