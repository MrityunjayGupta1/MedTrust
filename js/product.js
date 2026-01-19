const products = {
  scalpel: {
    name: "Surgical Scalpel",
    image: "images/scalpels.jpg",
    description: "A sugar monitor, also known as a glucose monitor, is an essential medical device used to measure blood glucose levels accurately and efficiently. It helps individuals with diabetes monitor and manage their blood sugar levels on a daily basis. Designed for ease of use, sugar monitors provide quick readings through small blood samples and display results clearly on digital screens. Suitable for use in hospitals, clinics, and home care, these devices support effective diabetes management and preventive healthcare. Compact, reliable, and easy to operate, sugar monitors play a vital role in maintaining balanced blood sugar levels and overall health.
"
  },
  forceps: {
    name: "Surgical Forceps",
    image: "images/forceps.jpg",
    description: "Surgical forceps are precision medical instruments designed to grasp, hold, and manipulate tissues, sutures, or small objects during surgical and medical procedures. Manufactured from high-quality, medical-grade stainless steel, forceps provide excellent strength, durability, and resistance to corrosion. Their ergonomically designed handles ensure a secure grip and precise control, allowing healthcare professionals to perform delicate tasks with accuracy and confidence. Commonly used in hospitals, clinics, and operating rooms, surgical forceps are essential tools for both routine and complex procedures. They are easy to sterilize, reusable, and available in various shapes and sizes to suit different surgical requirements.
"
  },
  scissors: {
    name: "Surgical Scissors",
    image: "images/scissors.jpg",
    description: "Surgical scissors are essential medical instruments used for cutting tissues, sutures, dressings, and surgical materials with precision and control. Crafted from high-quality, medical-grade stainless steel, they offer exceptional sharpness, durability, and resistance to corrosion. Their finely honed blades ensure clean and accurate cuts, reducing tissue trauma during procedures. Ergonomically designed finger rings provide comfort and stability, allowing surgeons to work efficiently for extended periods. Widely used in operating rooms, clinics, and emergency settings, surgical scissors are available in various shapes and sizes for specific applications. They are easy to sterilize, reusable, and built to meet strict medical standards.
"
},
  stethoscope: {
    name: "Stethoscope",
    image: "images/stethoscope.jpg",
    description: "A stethoscope is a vital diagnostic medical instrument used to listen to internal body sounds such as heartbeats, lung sounds, and blood flow. It helps healthcare professionals accurately assess a patient’s cardiovascular and respiratory health. Made from high-quality materials, a stethoscope typically features sensitive chest pieces, flexible tubing, and comfortable ear tips to ensure clear sound transmission and ease of use. Widely used by doctors, nurses, and medical practitioners, stethoscopes are essential in hospitals, clinics, and medical examinations. Durable, lightweight, and easy to handle, they play a crucial role in routine checkups and early detection of health conditions.
"
},
   bpmonitor: {
    name: "Blood Pressure Monitor",
    image: "images/bp-monitor.jpg",
    description: "A blood pressure (BP) monitor is a medical device used to measure and monitor a person’s blood pressure accurately and efficiently. It plays a crucial role in diagnosing and managing hypertension and other cardiovascular conditions. Modern BP monitors are designed for ease of use, featuring clear digital displays, comfortable cuffs, and reliable measurement technology. Suitable for use in hospitals, clinics, and home settings, these devices help healthcare professionals and patients track blood pressure regularly. BP monitors are durable, portable, and provide quick, consistent readings, making them an essential tool for maintaining heart health and supporting preventive medical care.
"
},
   oximeter: {
    name: "Oximeter",
    image: "images/oximeter.jpg",
    description: "A pulse oximeter is a compact medical device used to measure blood oxygen saturation (SpO₂) levels and pulse rate quickly and non-invasively. It is commonly used to monitor respiratory and cardiovascular health in hospitals, clinics, and home care settings. Designed for convenience and accuracy, pulse oximeters feature a clear digital display and user-friendly operation, allowing instant readings with minimal effort. Made from durable materials, they are lightweight, portable, and suitable for patients of all ages. Pulse oximeters are essential tools for early detection of oxygen level fluctuations and effective health monitoring.
"
},

   sugarmonitor: {
    name: "Blood Sugar Monitor",
    image: "images/sugar-monitor.jpg",
    description: "A sugar monitor, also known as a glucose monitor, is an essential medical device used to measure blood glucose levels accurately and efficiently. It helps individuals with diabetes monitor and manage their blood sugar levels on a daily basis. Designed for ease of use, sugar monitors provide quick readings through small blood samples and display results clearly on digital screens. Suitable for use in hospitals, clinics, and home care, these devices support effective diabetes management and preventive healthcare. Compact, reliable, and easy to operate, sugar monitors play a vital role in maintaining balanced blood sugar levels and overall health.
"
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

