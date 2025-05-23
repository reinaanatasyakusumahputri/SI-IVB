// Scroll Event Listener for Profile Image Shrink Effect
window.addEventListener('scroll', () => {
    const profile = document.getElementById('profile-image-container');
    // Add 'shrink' class if scrolled more than 100px
    window.scrollY > 100 ? profile.classList.add('shrink') : profile.classList.remove('shrink');
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('section');
function reveal() {
    const trigger = window.innerHeight * 0.8; // Trigger point for revealing
    sections.forEach(sec => {
        // Add 'reveal' class if section is in view
        if (sec.getBoundingClientRect().top < trigger) {
            sec.classList.add('reveal', 'active');
        }
    });
}
window.addEventListener('scroll', reveal); // Reveal on scroll
window.addEventListener('load', reveal); // Reveal on load

// Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle 'show' class
});
 // Toggle menu visibility
// Dark Mode Toggle
const darkBtn = document.getElementById('dark-mode-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark'); // Set dark mode if saved in local storage
    darkBtn.textContent = '🌞'; // Change icon to sun
}
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle dark mode
    const dark = document.body.classList.contains('dark');
    darkBtn.textContent = dark ? '🌞' : '🌙'; // Change icon based on mode
    localStorage.setItem('theme', dark ? 'dark' : 'light'); // Save theme in local storage
});
// Portfolio Filter Buttons Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class on all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class on clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox Elements
let lightboxOverlay = document.createElement('div');
lightboxOverlay.id = 'lightbox-overlay';

lightboxOverlay.innerHTML = `
  <div id="lightbox-content">
    <button id="lightbox-close" aria-label="Close">&times;</button>
    <img src="" alt="Project Preview" />
  </div>
`;

document.body.appendChild(lightboxOverlay);

const lightboxImage = lightboxOverlay.querySelector('img');
const lightboxClose = lightboxOverlay.querySelector('#lightbox-close');

// Open lightbox on project click
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('.project-image').src;
        const imgAlt = item.querySelector('.project-image').alt;
        lightboxImage.src = imgSrc;
        lightboxImage.alt = imgAlt;
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox open
    });
});

// Close lightbox when clicking close button or outside image
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Enable scrolling back
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Send form data using EmailJS
        .then(() => {
            alert('Message sent successfully!'); // Success message
            this.reset(); // Reset form
        })
        .catch(err => {
            alert('Failed to send message.'); // Error message
            console.error(err); // Log error for debugging
        });
});

// Scroll to Top Button
document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});

// Set Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear(); // Dynamically set current year
