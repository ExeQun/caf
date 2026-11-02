export function loadContact() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.classList.add('page');

  const h1 = document.createElement('h1');
  h1.textContent = 'Контакты';
  div.appendChild(h1);

  // Задание 1.1 — контакты
  const info = document.createElement('div');
  info.innerHTML = `
    <p>📍 г. Москва, ул. Пушкина, д. 10</p>
    <p>📞 +7 (495) 123-45-67</p>
    <p>🕐 Ежедневно с 9:00 до 22:00</p>
    <p><a href="https://instagram.com" target="_blank">📷 Мы в Instagram</a></p>
  `;
  div.appendChild(info);

  // Задание 2.3 — бронирование
  const reserveBtn = document.createElement('button');
  reserveBtn.classList.add('reserve-btn');
  reserveBtn.textContent = 'Забронировать столик';
  reserveBtn.onclick = () => alert('Столик забронирован! Мы вам перезвоним.');
  div.appendChild(reserveBtn);

  // Задание 3.1 — форма с валидацией
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="f-name" placeholder="Имя">
    <span class="error-message" id="err-name"></span>
    <input type="text" id="f-email" placeholder="Email">
    <span class="error-message" id="err-email"></span>
    <textarea id="f-msg" placeholder="Сообщение"></textarea>
    <button type="submit">Отправить</button>
  `;
  div.appendChild(form);

  const nameInput = form.querySelector('#f-name');
  const emailInput = form.querySelector('#f-email');
  const nameErr = form.querySelector('#err-name');
  const emailErr = form.querySelector('#err-email');

  form.onsubmit = (e) => {
    e.preventDefault();
    let ok = true;

    const name = nameInput.value.trim();
    if (name.length < 2) {
      nameInput.classList.add('error');
      nameErr.textContent = 'Минимум 2 символа';
      ok = false;
    } else {
      nameInput.classList.remove('error');
      nameErr.textContent = '';
    }

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.classList.add('error');
      emailErr.textContent = 'Некорректный email';
      ok = false;
    } else {
      emailInput.classList.remove('error');
      emailErr.textContent = '';
    }

    if (ok) {
      alert('Спасибо, ' + name + '!');
      form.reset();
    }
  };

  content.appendChild(div);
}