// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Filter functionality
const buttons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    projects.forEach(p => {
      p.style.display = filter === 'all' || p.classList.contains(filter) ? 'block' : 'none';
    });
  });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name && email && message) {
    alert("Pesan berhasil dikirim!");
  } else {
    alert("Harap isi semua kolom.");
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

