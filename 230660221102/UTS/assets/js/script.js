document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    const portfolioFilterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');
    const loadingOverlay = document.getElementById('loading-overlay');
    const skillBars = document.querySelectorAll('.progress-bar');
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');

    // --- Loading Animation ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500); 
    });

    // --- Dark/Light Mode Toggle ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light-mode');
            darkModeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- Responsive Navigation (Mobile Menu) ---
    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        mobileMenu.classList.toggle('active'); // Optional: for animating burger icon
    });

    // Close mobile menu when a link is clicked (for smooth scrolling)
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // --- Smooth Scrolling ---
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Portfolio Filter ---
    portfolioFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Remove 'active' from all buttons and add to clicked one
            portfolioFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block'; // Show item
                    item.classList.add('animate-fade-in'); // Re-trigger animation
                    item.classList.remove('animated'); // Remove to re-add on scroll
                    setTimeout(() => item.classList.add('animated'), 100); // Re-animate
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });

    // --- Lightbox Initialization (using SimpleLightbox) ---
    $(function() {
        if (typeof $.fn.simpleLightbox !== 'undefined') {
            $('.portfolio-grid a.lightbox-trigger').simpleLightbox({
                navText: ['&lsaquo;','&rsaquo;'], 
                captionsData: 'alt', 
                captionDelay: 250
            });
        } else {
            console.warn("SimpleLightbox not loaded. Check your CDN script.");
        }
    });


    // --- Form Validation ---
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        let isValid = true;

        // Reset error messages
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        subjectError.style.display = 'none';
        messageError.style.display = 'none';
        formStatus.textContent = '';

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Nama tidak boleh kosong.';
            nameError.style.display = 'block';
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email tidak boleh kosong.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Format email tidak valid.';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validate Subject
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subjek tidak boleh kosong.';
            subjectError.style.display = 'block';
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Pesan tidak boleh kosong.';
            messageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            formStatus.textContent = 'Mengirim pesan...';
            setTimeout(() => {
                formStatus.textContent = 'Pesan berhasil dikirim! Terima kasih.';
                formStatus.style.color = '#28a745'; 
                contactForm.reset(); 
            }, 1500);
        } else {
            formStatus.textContent = 'Mohon perbaiki kesalahan dalam formulir.';
            formStatus.style.color = '#dc3545'; 
        }
    });

    // --- Intersection Observer for Animations (Lazy Loading & Element Animation) ---
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animate-fade-in') || entry.target.classList.contains('animate-slide-up')) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); 
                }

                // Animate skill bars when visible
                if (entry.target.classList.contains('progress-bar-container')) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    const skillPercentage = parseInt(progressBar.style.width); 
                    if (!isNaN(skillPercentage)) {
                        progressBar.style.width = skillPercentage + '%';
                    }
                    observer.unobserve(entry.target); 
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    animatedElements.forEach(el => observer.observe(el));

    // Observe all progress bar containers
    document.querySelectorAll('.progress-bar-container').forEach(container => {
        observer.observe(container);
    });
});
// Progress bar
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const percentage = bar.dataset.progress;
    setTimeout(() => {
      bar.style.width = percentage + '%';
    }, 100);
  });
});


