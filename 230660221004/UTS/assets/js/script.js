const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;

// Cek apakah tema gelap sudah diatur sebelumnya
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
}
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        const filter = button.dataset.filter;
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                item.setAttribute('aria-hidden', 'false');
            } else {
                item.style.display = 'none';
                item.setAttribute('aria-hidden', 'true');
            }
        });
    });
});
// Contact Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    alert(
      `Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`
    );
    contactForm.reset();
  } else {
    alert("Silakan isi semua field!");
  }
});

darkModeCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    // Simpan preferensi tema ke localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    document.querySelector("#__next > div > div.mx-auto.min-h-screen.max-w-screen-xl.px-6.py-12.font-sans.md\\:px-12.md\\:py-16.lg\\:py-0 > div > div > button > img")

});
