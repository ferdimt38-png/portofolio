// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const onScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add('visible');
  });
};
document.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Demo contact form submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async () => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    alert(`Terima kasih, ${name}! Pesan kamu:\n${message}\n\n(Demo: Integrasi email/CRM belum diaktifkan)`);
  });
}