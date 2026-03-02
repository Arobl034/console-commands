/* =============================================
   Developer Foundations — script.js
   ============================================= */

// Scroll reveal — adds 'in' class to .fade-in elements
// when they enter the viewport, triggering CSS transitions.
// Each card gets a staggered delay based on its index.

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target); // stop watching once revealed
    }
  });
}, { threshold: .1 });

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = (i * 120) + 'ms';
  io.observe(el);
});