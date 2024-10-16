//scoll
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    once: true
  });
});

//Tema dark
const htmlTag = document.documentElement;
const tema = ()=> {
  
  if (htmlTag.getAttribute('data-bs-theme') === 'light') {
    htmlTag.setAttribute('data-bs-theme', 'dark');
  } else {
    htmlTag.setAttribute('data-bs-theme', 'light');
  }
};