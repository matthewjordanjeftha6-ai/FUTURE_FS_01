// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuLinks = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});

// Close menu when clicking a link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove('active');
  }
});

// Prevent form submission for now
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! I\'ll get back to you soon.');
});