fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products-container");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="images/${product.image}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button onclick="viewProduct('${product.id}')">View Product</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
