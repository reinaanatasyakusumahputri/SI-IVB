document.addEventListener("DOMContentLoaded", function() {
    const toggleMode = document.getElementById("toggleMode");
    const body = document.body;

    toggleMode.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        toggleMode.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form telah dikirim!");
        contactForm.reset();
    });

    const loading = document.getElementById("loading");
    loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none";
    }, 2000);
});
