import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function createNav(activeBtn) {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');

  const tabs = [
    { text: 'Главная', fn: loadHome },
    { text: 'Меню', fn: loadMenu },
    { text: 'Контакты', fn: loadContact },
  ];

  tabs.forEach((tab) => {
    const btn = document.createElement('button');
    btn.textContent = tab.text;
    btn.onclick = () => clearAndLoad(tab.fn, btn);
    nav.appendChild(btn);
  });

  content.appendChild(nav);

  if (activeBtn) activeBtn.classList.add('active');
}

function clearAndLoad(fn, activeBtn) {
  const content = document.getElementById('content');
  content.textContent = '';
  createNav(activeBtn);
  fn();
}

// Старт
clearAndLoad(loadHome, null);
document.querySelector('nav button').classList.add('active');