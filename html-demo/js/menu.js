document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuBtn.addEventListener('click', function() {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });
});
