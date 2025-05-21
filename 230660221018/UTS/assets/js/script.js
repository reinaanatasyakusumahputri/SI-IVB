// Loader effect
window.addEventListener("load", () => {
  // Tambahkan delay sebelum menghapus loader
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 300); // delay selama 0.3 detik
});

// Portfolio filter
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".portfolio-item").forEach(item => {
      const category = item.getAttribute("data-category");
      item.style.display = (filter === "all" || filter === category) ? "block" : "none";
    });
  });
});

// Form Contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload
    alert("Pesan terkirim!");
    form.reset(); // Mengosongkan form
  });
});

//Set Dark and Light Mode
document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeIcon = document.getElementById('modeIcon');
  const body = document.body;
  const navbar = document.getElementById('navbar');

  // Cek preferensi mode dari localStorage
  const savedMode = localStorage.getItem('theme');

  function applyMode(mode) {
    if (mode === 'light') {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      navbar.classList.add('light-mode');
      navbar.classList.remove('dark-mode');
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      navbar.classList.add('dark-mode');
      navbar.classList.remove('light-mode');
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
    }
    localStorage.setItem('theme', mode);
  }

  // Set awal
  applyMode(savedMode === 'light' ? 'light' : 'dark');

  modeToggle.addEventListener('click', function () {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    applyMode(newMode);
  });
});

//Set Media Saya
const container = document.getElementById("media-container");
const buttons = document.querySelectorAll(".filter-btn");

function loadMedia(type) {
  const container = document.getElementById("container");
  let embed = "";

 switch (type) {
  case "figma":
    const figmaLinks = [
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/OBccJyIlB3Wfi6QCErG9rl/CV-Mobile-App---INTAN-KARTIKA?node-id=0-1&t=zaHEoSul2cQEVTfp-1",
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/m0eWbtjDRH326q2QHqqICH/Desain-Web-Coffee?t=qE1n3PWSrCpKkJyB-1",
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/6jCHyrmwElPXxdfDng4J9G/Untitled?t=qE1n3PWSrCpKkJyB-1",
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/6qV9LAWhkjuU9FW0yep3dj/Intan-Kartika?m=auto&t=Eza1oOmMeM7cJRrE-1",
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/BGopEiw487ajAPSNLHgKGW/Project-Mockup?m=auto&t=Eza1oOmMeM7cJRrE-1"
    ];

    embed = `
      <div class="media-scroll">
        ${figmaLinks.map(link => `
          <div class="media-card">
            <iframe src="${link}" allowfullscreen></iframe>
          </div>
        `).join('')}
      </div>
    `;
    break;

  case "paper":
    embed = `
      <div class="media-scroll">
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1qRflrRjE_XCgv82jNLK1uIlYsS0C-s8B/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1qUPcYxc6RujJzEoNnCmAQU3-T_b0F2ko/preview"></iframe>
        </div>
      </div> 
    `;
    break;

  case "youtube":
    const youtubeLinks = [
      "https://www.youtube.com/embed/azqgAJXeLak?si=fGTxIk-1YcktXDM9",
      "https://www.youtube.com/embed/lVrdx0sXNZI?si=Z0OmBJmbwM8VBuMC"
    ];

    embed = `
      <div class="media-scroll">
        ${youtubeLinks.map(link => `
          <div class="media-card">
            <iframe src="${link}" allowfullscreen></iframe>
          </div>
        `).join('')}
      </div>
    `;
    break;

  case "cv":
    embed = `
      <div class="cv-preview-container">
        <img src="assets/docs/CV-Preview.png" alt="Preview CV" class="cv-preview-image" onclick="window.open('assets/docs/CV Resume.pdf', '_blank')">
        <p class="cv-caption">Klik gambar untuk membuka CV PDF</p>
      </div>
    `;
    break;

  case "sertifikat":
    embed = `
      <div class="media-scroll">
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1Ia0VuFzyuttLDBgzu3258tfz1asrU3XL/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/17Efsotbrl3JiBAgMt1sPJNagExTuyJMl/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1-MoYyiKFnvAyzSYAV3AU_w5fi9J-NDBU/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1RyNWu7wZHZp3v4PQj-u06aXMxKkQ0P1s/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1XtkmUc1UHuUofXNBjNfEz-VFMC0pFaA5/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1lAp1_PSpGqz4z3s1bdIHdDLvbvkT3INi/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1rZudQ6vDNeBxZ9ff9nAiFeGGVqNb_VER/preview"></iframe>
        </div>
        <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1I_nOcMjrudO0m6z3OzT9YdVwb_m-FPAt/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1i8U1_wCJbNNw2Fs9ODUlpgcRzzoooSj6/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1IbaBwcmV7yvMB44o-xcTIaoY8ExJQktk/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1IeWQlvc80ZLB5f32Fb0Pj31AxXVwK7Bv/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1vii8Es67HGmncggD6AoexrCUGHb4No-q/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1Iig31tq5rUpQDnxaFYHhpKtjZETgI7Hc/preview"></iframe>
        </div>
         <div class="media-card">
          <iframe src="https://drive.google.com/file/d/1e1hf17H33LaC9qofP0oY6c7QwzTp3xUk/preview"></iframe>
        </div>
      </div>
    `;
    break;
}
  container.innerHTML = `<div class="media-scroll">${embed}</div>`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    loadMedia(button.dataset.type);
  });
});

// Tampilkan UI/UX (figma) saat pertama kali dibuka
document.addEventListener("DOMContentLoaded", () => {
  loadMedia("figma");
});

