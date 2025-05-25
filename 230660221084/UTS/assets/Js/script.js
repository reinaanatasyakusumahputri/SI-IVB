const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
const navLinks = document.querySelectorAll('nav a'); // Sesuaikan selector jika perlu

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default link (navigasi halaman) jika diinginkan

    // Hapus kelas 'active' dari semua link
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada link yang diklik
    link.classList.add('active');
  });
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });

    link.addEventListener('mouseout', () => {
        if (!link.classList.contains('active')) {
            link.style.backgroundColor = 'transparent';
        }
    });
});
});