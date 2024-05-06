document.addEventListener("DOMContentLoaded", function () {
    var productContainer = document.getElementById('product-container');
    var categoryButtons = document.querySelectorAll('[product-category]');

    
  
    fetch('./assets/json/products.json')  
      .then(response => response.json())
      .then(products => {
        displayProducts(products);
  
        categoryButtons.forEach(button => {
          button.addEventListener('click', function () {
            var selectedCategory = this.getAttribute('product-category');
  
            if (selectedCategory === 'all') {
              displayProducts(products);
            } else {
              var filteredProducts = products.filter(product => product.category === selectedCategory);
              displayProducts(filteredProducts);
            }
          });
        });
      })
      .catch(error => console.error('Fetch Error:', error));
  
    function displayProducts(products) {

    
      var productHtml = products.map(product => `
      <div class="col-md-4 col-sm-6 col-xs-12" product-category="${product.category}">
      <div class="product-item">
        <div class="product-img">
          <a href="./single-products.html">
            <img class="primary-img" src="${product['primary-img']}" alt="Product Images" />
            <img class="secondary-img" src="${product['secondary-img']}" alt="Product Images" />
          </a>
          <div class="product-add-action">
            <ul>
              <li><a href="#"><i class="pe-7s-like"></i></a></li>
              <li><a href="#"><i class="pe-7s-look"></i></a></li>
              <li><a href="#"><i class="pe-7s-cart card-btn"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="product-content">
          <a class="product-name" href="./single-products.html">${product['product-name']}</a>
          <div class="price-box pb-1">
            <span class="new-price">$${product.price}</span>
          </div>
          <div class="rating-box">
            <ul>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      `).join('');
  
      productContainer.innerHTML = productHtml;

    }

});


