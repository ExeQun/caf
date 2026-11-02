import menuData from './menu-data.json';
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

const images = {
  croissant: croissantImg,
  tiramisu: tiramisuImg,
  cheesecake: cheesecakeImg,
};

export function loadMenu() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.classList.add('page');

  const h1 = document.createElement('h1');
  h1.textContent = 'Меню';
  div.appendChild(h1);

  const count = parseInt(localStorage.getItem('menuVisits') || '0', 10) + 1;
  localStorage.setItem('menuVisits', count);

  const p = document.createElement('p');
  p.textContent = `Вы открывали это меню ${count} раз(а).`;
  p.style.textAlign = 'center';
  p.style.color = '#999';
  div.appendChild(p);

  menuData.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = images[item.image];
    img.alt = item.name;
    card.appendChild(img);

    const info = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const price = document.createElement('p');
    price.textContent = `${item.price} ₽`;
    price.style.color = '#c98b5f';
    price.style.fontWeight = 'bold';

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(price);
    card.appendChild(info);

    div.appendChild(card);
  });

  content.appendChild(div);
}