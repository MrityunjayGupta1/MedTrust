const products = {
  scalpel: {
    name: "Surgical Scalpel",
    image: "images/scalpels.jpg",
    description: "A surgical scalpel is a precision cutting instrument widely used in medical and surgical procedures for making accurate incisions. Crafted from high-quality, medical-grade stainless steel, scalpels offer exceptional sharpness, strength, and durability. Their finely honed blades allow surgeons to perform delicate procedures with maximum control and minimal tissue trauma."
  },

  forceps: {
    name: "Surgical Forceps",
    image: "images/forceps.jpg",
    description: "Surgical forceps are precision medical instruments designed to grasp, hold, and manipulate tissues, sutures, or small objects during surgical and medical procedures. Manufactured from medical-grade stainless steel, they provide excellent strength, durability, and corrosion resistance."
  },

  scissors: {
    name: "Surgical Scissors",
    image: "images/scissors.jpg",
    description: "Surgical scissors are essential instruments used for cutting tissues, sutures, and dressings with precision. They are durable, sharp, and ergonomically designed for professional medical use."
  },

  stethoscope: {
    name: "Stethoscope",
    image: "images/stethoscope.jpg",
    description: "A stethoscope is a vital diagnostic instrument used to listen to heart, lung, and blood flow sounds. It is widely used by doctors and healthcare professionals for routine examinations."
  },

  bpmonitor: {
    name: "Blood Pressure Monitor",
    image: "images/bp-monitor.jpg",
    description: "A blood pressure monitor is used to measure and track blood pressure accurately. It is essential for diagnosing and managing hypertension and cardiovascular conditions."
  },

  oximeter: {
    name: "Oximeter",
    image: "images/oximeter.jpg",
    description: "A pulse oximeter measures oxygen saturation and pulse rate non-invasively. It is commonly used in hospitals, clinics, and home care settings."
  },

  sugarmonitor: {
    name: "Blood Sugar Monitor",
    image: "images/sugar-monitor.jpg",
    description: "A blood sugar monitor helps individuals measure and manage glucose levels effectively. It supports diabetes care in clinical and home environments."
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

