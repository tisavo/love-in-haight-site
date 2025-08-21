document.querySelector('.nav-toggle')?.addEventListener('click', (e)=>{
  const btn = e.currentTarget;
  const menu = document.getElementById('menu');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});
document.getElementById('year').textContent = new Date().getFullYear();
