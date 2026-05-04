const btn = document.getElementById('menu-btn');
const menu = document.getElementById('nav-menu');
btn.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
