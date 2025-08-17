const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__navigation__link');

// Check if elements exist before adding event listeners
if (!mobileMenu || !menuBtnOpen || !menuBtnClose) {
  console.warn('Mobile menu elements not found');
}

const toggleMenu = () => mobileMenu?.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen?.addEventListener('click', toggleMenu);
menuBtnClose?.addEventListener('click', toggleMenu);

menuBtnOpen?.addEventListener('click', disableScroll);
menuBtnClose?.addEventListener('click', disableScroll);

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('is-scroll-disabled');
    setTimeout(() => {
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);
  });
});
