// Get modal elements
const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-section__button');
const closeModalBtn = document.querySelector('.modal-close-button');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

// Close modal on close button
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
});

// Close modal on backdrop click
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});
