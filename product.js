const products = {
  "scalpel": {
    name: "Surgical Scalpel",
    image: "images/scalpel.jpg",
    description: "High-precision stainless steel surgical scalpel used for accurate incisions in medical procedures. Designed for sharpness, durability, and control."
  },
  "forceps": {
    name: "Surgical Forceps",
    image: "images/forceps.jpg",
    description: "Medical-grade forceps with firm grip and corrosion resistance. Ideal for handling tissues and surgical materials."
  },
  "scissors": {
    name: "Surgical Scissors",
    image: "images/scissors.jpg",
    description: "Sharp surgical scissors for precise cutting of tissues and sutures. Manufactured for smooth and controlled operation."
  },
  "bp-monitor": {
    name: "Blood Pressure Monitor",
    image: "images/bp-monitor.jpg",
    description: "Digital blood pressure monitoring device with accurate readings and easy operation for home and clinical use."
  },
  "sugar-monitor": {
    name: "Blood Sugar Monitor",
    image: "images/sugar-monitor.jpg",
    description: "Portable blood glucose monitoring device for diabetes management with fast and reliable results."
  },
  "stethoscope": {
    name: "Stethoscope",
    image: "images/stethoscope.jpg",
    description: "High-quality stethoscope designed for accurate auscultation and professional medical diagnosis."
  },
  "oximeter": {
    name: "Oximeter",
    image: "images/oximeter.jpg",
    description: "Pulse oximeter for measuring blood oxygen saturation and pulse rate quickly and accurately."
  }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (products[productId]) {
  document.getElementById("productName").textContent = products[productId].name;
  document.getElementById("productImage").src = products[productId].image;
  document.getElementById("productDescription").textContent = products[productId].description;
} else {
  document.getElementById("productName").textContent = "Product Not Found";
  document.getElementById("productDescription").textContent = "The requested product does not exist.";
}

