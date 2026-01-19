const products = {
  scalpel: {
    name: "Surgical Scalpel",
    image: "images/scalpels.jpg",
    description: "High-quality stainless steel scalpel used for precise surgical incisions."
  },
  forceps: {
    name: "Surgical Forceps",
    image: "images/forceps.jpg",
    description: "Medical-grade forceps designed for firm grip and control."
  },
  scissors: {
    name: "Surgical Scissors",
    image: "images/scissors.jpg",
    description: "Sharp surgical scissors suitable for medical procedures."
},
  stethoscope: {
    name: "Stethoscope",
    image: "images/stethoscope.jpg",
    description: "Sharp surgical scissors suitable for medical procedures."
},
   bpmonitor: {
    name: "Blood Pressure Monitor",
    image: "images/bp-monitor.jpg",
    description: "Sharp surgical scissors suitable for medical procedures."
},
   oximeter: {
    name: "Oximeter",
    image: "images/oximeter.jpg",
    description: "Sharp surgical scissors suitable for medical procedures."
},

   sugarmonitor: {
    name: "Blood Sugar Monitor",
    image: "images/sugar-monitor.jpg",
    description: "Sharp surgical scissors suitable for medical procedures."
  }
};
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("productDetails");

if (!id || !products[id]) {
  container.innerHTML = "<h2>Product not found</h2>";
} else {
  const p = products[id];
  container.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h1>${p.name}</h1>
    <p>${p.description}</p>
  `;
}

