const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    mainContent.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    mainContent.classList.remove('open');
});