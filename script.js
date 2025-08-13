// Navegação mobile
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
navToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Tema (dark/light)
const themeToggle = document.getElementById('themeToggle');
const userPref = localStorage.getItem('theme');
if(userPref){ document.documentElement.dataset.theme = userPref; }
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
});

// Ajustar tema inicial respeitando o sistema
if(!userPref){
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  document.documentElement.dataset.theme = prefersLight ? 'light' : 'dark';
}

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Acessibilidade: fechar menu ao clicar fora em telas pequenas
document.addEventListener('click', (e) => {
  if(!menu.contains(e.target) && !navToggle.contains(e.target)){
    menu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
