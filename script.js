// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Переключение мобильного меню
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav.nav ul');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Анимация появления секций при скролле
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(sec => observer.observe(sec));

  // Плавный скролл для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      // Отключаем поведение якоря, если это внутренняя ссылка
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        // Закрываем меню на мобильных после клика
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
        }
      }
    });
  });

  // (Дополнительный пример) Параллакс-эффект для изображения в Hero
  const heroImage = document.querySelector('.hero-image img');
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    // Смещение на 30% от прокрутки
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
});
