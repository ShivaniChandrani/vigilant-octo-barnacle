const data = {
  "modhera-sun-temple": {
    name: "Modhera Sun Temple",
    description: "An 11th-century temple dedicated to Surya, the sun god, located in Gujarat.",
    image: "images/sites/modhera.jpg"
  },
  "adi-annamalai-temple": {
    name: "Adi Annamalai Temple",
    description: "One of the oldest temples near Arunachala hill in Tamil Nadu.",
    image: "images/sites/annamalai.jpg"
  },
  "western-ghats": {
    name: "Western Ghats",
    description: "A UNESCO World Heritage site with rich biodiversity spanning multiple Indian states.",
    image: "images/sites/ghats.jpg"
  },
  "red-fort": {
    name: "Red Fort",
    description: "A historic fort in the city of Delhi that served as the main residence of the Mughal Emperors.",
    image: "images/sites/redfort.jpg"
  },
  "chhatrapati-shivaji-terminus": {
    name: "Chhatrapati Shivaji Terminus",
    description: "A UNESCO World Heritage Site and historic railway station in Mumbai.",
    image: "images/sites/shivaji.jpg"
  },
  "bandipur-national-park": {
    name: "Bandipur National Park",
    description: "A national park in Karnataka known for its tigers and natural beauty.",
    image: "images/sites/bandipur.jpg"
  },
  "ganga-aarti": {
    name: "Ganga Aarti",
    description: "A spiritual ritual of offering to the Ganges river, held daily in Varanasi and other ghats.",
    image: "images/sites/ganga.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const placeKey = params.get("place");
const place = data[placeKey];

const title = document.getElementById("site-title");
const info = document.getElementById("site-info");

if (place) {
  title.textContent = place.name;
  info.innerHTML = `
    <p>${place.description}</p>
    <img src="${place.image}" alt="${place.name}" />
  `;
} else {
  title.textContent = "Place Not Found";
  info.innerHTML = `<p>No details available for this site.</p>`;
}