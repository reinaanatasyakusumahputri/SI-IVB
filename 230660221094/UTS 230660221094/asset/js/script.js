// Toggle Menu on Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scroll (built-in with CSS: scroll-behavior)

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// Filter Gallery
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.gallery .item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Contact Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
  }
});

// Page Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".embed-button");
  const previewArea = document.getElementById("previewArea");

  const embeds = {
    design: [
      "https://drive.google.com/file/d/1WZtxM6uElVbGpyu03YDqeIlaE0bdod2T/preview",
      "https://drive.google.com/file/d/1RgjwWnsIsr5Ym1ZX0EYSC4_RAVdQ5XGX/preview",
      "https://drive.google.com/file/d/1RKTRlLCv_Y3nm0YJ9io9QRtz1u4b9oBO/preview",
       "https://drive.google.com/file/d/1fgSJyfxgV8umdi0DQLsMJ7LM09tz_YOZ/preview",


       // bisa tambah link lain
    ],
    youtube: [
      "https://www.youtube.com/embed/lVrdx0sXNZI?si=SGSe0yEZUDD827JC",
       "https://www.youtube.com/embed/azqgAJXeLak?si=esDQK9HkYXxpu7FF",

    ],
     cv: [
      "asset/doc/CV.pdf" // Ganti path sesuai lokasi file PDF kamu
    ]
  
  };

  function renderEmbeds(type) {
    const urls = embeds[type];
    if (!urls || urls.length === 0) {
      previewArea.innerHTML = "<p>Tidak ada konten untuk kategori ini.</p>";
      return;
    }

    previewArea.innerHTML = urls.map(url => `
      <iframe 
        src="${url}" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>
    `).join('');
  }

  renderEmbeds("design");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-filter");
      renderEmbeds(type);
    });
  });
});
