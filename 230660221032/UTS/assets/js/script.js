// =================== 1. ANIMASI LOADING ===================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

// =================== TOGGLE THEME DENGAN CUSTOM CSS ===================

const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Simpan preferensi pengguna
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("tema", "gelap");
  } else {
    localStorage.setItem("tema", "terang");
  }
});

// Saat halaman dimuat, cek preferensi
window.addEventListener("DOMContentLoaded", function () {
  const temaSimpan = localStorage.getItem("tema");
  if (temaSimpan === "gelap") {
    document.body.classList.add("dark-mode");
  }
});

// =================== 3. FILTER GALERI PORTOFOLIO ===================
function filterGallery(kategori) {
  const semuaItem = document.querySelectorAll(".project-item");

  semuaItem.forEach((item) => {
    const kategoriItem = item.getAttribute("data-category");
    item.style.display = (kategori === "all" || kategori === kategoriItem) ? "block" : "none";
  });
}


// =================== 4. VALIDASI FORM KONTAK ===================
const formKontak = document.getElementById("contactForm");

if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    const nama = formKontak.querySelector("input[name='name']").value.trim();
    const email = formKontak.querySelector("input[name='email']").value.trim();
    const pesan = formKontak.querySelector("textarea[name='message']").value.trim();

    if (!nama || !email || !pesan) {
      alert("Harap isi semua kolom formulir sebelum mengirim.");
      e.preventDefault();
    }
  });
}
