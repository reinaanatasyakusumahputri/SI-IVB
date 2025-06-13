document.addEventListener("DOMContentLoaded", function () {
    // Sembunyikan loading screen setelah halaman selesai dimuat
    window.addEventListener("load", function () {
        setTimeout(function () {
            document
                .getElementById("loading-screen")
                .style
                .display = "none";
        }, 600); // Delay 0.6 detik untuk animasi
    });
});

const toggleSwitch = document.getElementById('darkModeToggle');
const currentMode = localStorage.getItem('theme');

// Atur mode awal
if (currentMode === 'dark') {
    document
        .body
        .classList
        .add('dark-mode');
    toggleSwitch.checked = true;
}

// Event toggle
toggleSwitch.addEventListener('change', () => {
    document
        .body
        .classList
        .toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Hire Button Click Event
const hireMeBtn = document.getElementById("hireMeBtn");

// Tambahkan fungsi untuk modal Hire Me
const hireModal = document.getElementById("hireModal");
const closeModal = document.getElementById("closeModal");
const hireForm = document.getElementById("hireForm");

hireMeBtn.addEventListener("click", function () {
    hireModal
        .classList
        .remove("hidden");
});

// Cek apakah elemen ada sebelum menambahkan event listener
if (closeModal) {
    closeModal.addEventListener("click", function () {
        hireModal
            .classList
            .add("hidden");
    });
}

// Tambahkan event listener untuk klik di luar modal
window.addEventListener("click", function (event) {
    if (event.target === hireModal) {
        hireModal
            .classList
            .add("hidden");
    }
});

// Handle hire form submission
hireForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document
        .getElementById("hireName")
        .value;
    const email = document
        .getElementById("hireEmail")
        .value;
    const message = document
        .getElementById("hireMessage")
        .value;

    if (name && email && message) {
        alert(
            `Terima kasih ${name}! Permintaan Anda untuk mengirimkan Pesan telah terkirim.`
        );
        hireForm.reset();
        hireModal
            .classList
            .add("hidden");
    } else {
        alert("Silakan isi semua field!");
    }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll(".slide-up");

    elements.forEach((element) => {
        const elementPosition = element
            .getBoundingClientRect()
            .top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element
                .classList
                .add("slide-up");
        }
    });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load

// Filter Function
document
    .querySelectorAll('.filter-btn')
    .forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            document
                .querySelectorAll('.portfolio-item')
                .forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
        });
    });

// Lightbox Preview
const lightboxImage = document.getElementById('lightboxImage');
document
    .querySelectorAll('#portfolioGallery a')
    .forEach(link => {
        link.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-img');
            lightboxImage.src = imgSrc;
        });
    });
