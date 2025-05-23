// ========== DARK / LIGHT MODE TOGGLE ==========
const toggleModeBtn = document.getElementById("toggle-mode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Simpan mode ke localStorage agar tetap aktif setelah reload
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Cek dan aktifkan mode dark jika sebelumnya dipilih
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// ========== VALIDASI FORM KONTAK ==========
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Validasi kosong
  if (!name.value || !email.value || !message.value) {
    alert("Semua field harus diisi!");
    return;
  }

  // Validasi email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert("Email tidak valid!");
    return;
  }

  // Jika valid
  alert("Pesan berhasil dikirim!");
  contactForm.reset();
});

// ========== PORTFOLIO FILTER ==========
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus class aktif dari semua tombol
    filterButtons.forEach((b) => b.classList.remove("active"));
    // Tambahkan class aktif ke tombol yang diklik
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (filterValue === "all" || itemCategory === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ========== LOADING SCREEN (dari CSS animasi) ==========
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
