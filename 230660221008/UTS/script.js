function toggleMode() {
  const body = document.body;
  const btn = document.querySelector('.toggle-button');
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  btn.textContent = body.classList.contains('dark-mode')
    ? '☀️ Mode Terang'
    : '🌙 Mode Gelap';
}
