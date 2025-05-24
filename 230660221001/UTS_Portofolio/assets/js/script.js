window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  if (!nama || !email || !pesan) {
    alert("Harap lengkapi semua kolom!");
    return;
  }
  if (!email.includes("@")) {
    alert("Format email tidak valid!");
    return;
  }
  alert("Pesan berhasil dikirim! (simulasi)");
  this.reset();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.style.display =
        filter === "all" || item.classList.contains(filter) ? "block" : "none";
    });
  });
});
