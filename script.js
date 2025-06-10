// Animación de secciones al hacer scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Progreso de scroll
const scrollPath = document.getElementById('scroll-path');
const progressBtn = document.getElementById('scroll-progress');
const pathLength = 2 * Math.PI * 54;

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = scrollTop / scrollHeight;
  const offset = pathLength * (1 - scrollProgress);
  scrollPath.style.strokeDashoffset = offset;
});

progressBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
