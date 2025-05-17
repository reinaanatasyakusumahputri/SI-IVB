// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Ubah teks tombol berdasarkan mode
    const button = document.getElementById("theme-toggle");
    if (body.classList.contains("dark-mode")) {
        button.textContent = "☀️ ";
    } else {
        button.textContent = "🌙 ";
    }
}