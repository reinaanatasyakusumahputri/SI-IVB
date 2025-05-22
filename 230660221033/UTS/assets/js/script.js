document.addEventListener("DOMContentLoaded", function () {
    // Sembunyikan loading screen setelah halaman selesai dimuat
    window.addEventListener("load", function () {
        setTimeout(function () {
            document.getElementById("loading-screen").style.display = "none";
        }, 1000); // Delay 1 detik untuk animasi
    });

    // Toggle Dark/Light Mode
    modeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    modeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
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
            alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`);
            contactForm.reset();
        } else {
            alert("Silakan isi semua field!");
        }
    });
});

  // ===== Category Filter Functionality =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      projects.forEach(project => {
        const category = project.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          project.style.display = 'flex';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
  
    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Tampilkan tombol setelah scroll 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll halus
        });
    });

    // --- Smooth Scrolling for Navigation Links (opsional, tapi bagus untuk UX) ---
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Sesuaikan dengan tinggi header
                    behavior: 'smooth'
                });
            }
        });
    });
  // ===== Lightbox Preview Functionality =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxClose = document.getElementById('lightbox-close');
  function openLightbox(project) {
    const img = project.querySelector('.project-image');
    const title = project.querySelector('.project-title').textContent;
    const category = project.querySelector('.project-category').textContent;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = category;
    lightbox.classList.add('active');
    // Trap focus inside lightbox for accessibility
    lightboxClose.focus();
    document.body.style.overflow = 'hidden'; // disable background scroll
  }
  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = ''; // re-enable scroll
  }
  projects.forEach(project => {
    // Open lightbox when clicking on project
    project.addEventListener('click', () => openLightbox(project));
    // Also open lightbox on keyboard enter key for accessibility
    project.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(project);
      }
    });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  // Close lightbox when clicking outside content
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  // Close lightbox on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

