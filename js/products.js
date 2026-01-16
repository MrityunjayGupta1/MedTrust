const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const searchInput = document.getElementById("searchInput");

/* OPEN MODAL */
function openModal(product) {
  modalImage.src = `images/${product.image}`;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.moreInfo;
  modal.classList.add("show");
}

/* CLOSE MODAL */
document.querySelector(".close-btn").onclick = () => {
  modal.classList.remove("show");
};

modal.onclick = () => modal.classList.remove("show");

document.querySelector(".modal-content").onclick = e => e.stopPropagation();

/* LOAD PRODUCTS */
fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products-container");

    function displayProducts(list) {
      container.innerHTML = "";

      if (list.length === 0) {
        container.innerHTML = "<p>No products found</p>";
        return;
      }

      list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
  <img src="images/${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p class="short-desc">${product.description}</p>
  function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
.;


        card.querySelector(".info-btn").onclick = () => openModal(product);
        container.appendChild(card);
      });
    }

    // Initial load
    displayProducts(products);

    // Search
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
      );
      displayProducts(filtered);
    });
  })
  .catch(err => console.error(err));


function openModal(product) {
  document.getElementById("modalImage").src = "images/" + product.image;
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalInfo").innerText = product.moreInfo;

  document.getElementById("productModal").classList.add("show");
  document.body.style.overflow = "hidden"; // lock background scroll
}

function closeModal() {
  document.getElementById("productModal").classList.remove("show");
  document.body.style.overflow = "auto";
}

