const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const products = {
  scalpel: {
    name: "Surgical Scalpel",
    image: "images/scalpel.jpg",
    description: "High-quality stainless steel surgical scalpel."
  },
  forceps: {
    name: "Surgical Forceps",
    image: "images/forceps.jpg",
    description: "Durable medical forceps with strong grip."
  }
};

const container = document.getElementById("productDetails");

if (!productId || !products[productId]) {
  container.innerHTML = `<h2>Product not found</h2>`;
} else {
  const p = products[productId];
  container.innerHTML = `
    <img src="${p.image}" style="width:300px">
    <h1>${p.name}</h1>
    <p>${p.description}</p>
    <a href="products.html">← Back to Products</a>
  `;
}
