document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    once: true
  });
});

window.addEventListener('scroll', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const value = bar.getAttribute('aria-valuenow');
    bar.style.width = `${value}%`;
  });
});


