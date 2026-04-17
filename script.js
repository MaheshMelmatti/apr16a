// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#58a6ff' : '#c9d1d9';
  });
});

// Contact form submit
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Message sent! Team will get back to you soon.');
  e.target.reset();
});

// Animate pipeline stages on load
document.querySelectorAll('.stage').forEach((el, i) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  setTimeout(() => {
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  }, i * 150);
});
