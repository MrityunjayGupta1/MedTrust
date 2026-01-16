const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("productImage").src = "images/" + product.image;
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productDesc").innerText = product.moreInfo;
  });
