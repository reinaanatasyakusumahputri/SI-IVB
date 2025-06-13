document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section, aside');

    // Intersection Observer untuk highlight dan animasi pop-out
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Update nav highlight
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });

                // Pop-out animasi muncul
                entry.target.classList.add('pop-out');
                setTimeout(() => {
                    entry.target.classList.remove('pop-out');
                }, 700);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll + highlight manual saat klik
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const section = document.querySelector(targetId);

            section.scrollIntoView({ behavior: 'smooth' });

            // Manual highlight
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Trigger pop-out animasi
            section.classList.add('pop-out');
            setTimeout(() => section.classList.remove('pop-out'), 700);
        });
    });

    // Form handling sederhana
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('💌 Terima kasih! Pesanmu sudah dikirim.');
    });

});

// 🎵 Interaktif: kaset
  const cassette = document.getElementById('cassette');
  const player = document.createElement('iframe');
  player.id = 'spotifyPlayer';
  player.src = "https://open.spotify.com/embed/track/2sDcIrosoXqiGv1D5OQUvF?utm_source=generator";
  player.width = "100%";
  player.height = "352";
  player.style.borderRadius = "12px";
  player.style.display = "none";
  document.querySelector('.cassette-container').appendChild(player);

  let isPlaying = false;

  cassette.addEventListener('click', () => {
    if (!isPlaying) {
      cassette.classList.add('spin');
      player.style.display = 'block';
    } else {
      cassette.classList.remove('spin');
      player.style.display = 'none';
    }
    isPlaying = !isPlaying;
  });

  // 🌙 Toggle Dark Cheerful Mode
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙 Dark Mode';
  toggleBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;border:none;border-radius:10px;background:#ff80ab;color:#fff;font-weight:bold;cursor:pointer;z-index:9999;';
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });

const gallery = document.querySelector('.portfolio-gallery');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');
const projects = document.querySelectorAll('.project-card');

// Scroll kiri kanan on button click
btnLeft.addEventListener('click', () => {
  gallery.scrollBy({ left: -250, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  gallery.scrollBy({ left: 250, behavior: 'smooth' });
});

// Klik project untuk scroll ke posisi project secara smooth
projects.forEach((project, i) => {
  project.addEventListener('click', () => {
    const scrollPosition = project.offsetLeft - gallery.offsetLeft;
    gallery.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });
});

// Back to Top button
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Back to Bottom button
document.getElementById('backToBottom').addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hide');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 600); // delay sesuai transisi opacity
});

