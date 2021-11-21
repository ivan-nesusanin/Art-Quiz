const section = document.querySelector('#section');
window.addEventListener('load', () => {
  setTimeout(() => {
    section.classList.add('section_visible');
  }, 200);
});
