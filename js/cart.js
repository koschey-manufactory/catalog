// menu

let menu = document.getElementById("menu");
let menuButton = document.getElementById("menuButton");
let burgerMenu1 = document.getElementById("burgerMenu1");
let burgerMenu2 = document.getElementById("burgerMenu2");
let burgerMenu3 = document.getElementById("burgerMenu3");
console.log(menu);

function burgerMenu() {
  console.log(menu);
  burgerMenu1.classList.toggle("checked1");
  burgerMenu2.classList.toggle("checked2");
  burgerMenu3.classList.toggle("checked3");
  menu.classList.toggle("opened");
  menuButton.classList.toggle("opened-menu");
}

function closeMenu() {
  burgerMenu1.classList.toggle("checked1");
  burgerMenu2.classList.toggle("checked2");
  burgerMenu3.classList.toggle("checked3");
  menu.classList.toggle("opened");
  menuButton.classList.toggle("opened-menu");
}




// Инициализация EmailJS
emailjs.init("3MmIo83jDJ5Rk45da"); // вставь свой публичный ключ из EmailJS

// Хранилище корзины
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Добавление товара в корзину
document.addEventListener("click", (e) => {
  if (e.target.matches(".add-to-cart")) {
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    const color = e.target.dataset.color || "Без цвета"; // добавляем цвет
    const text = e.target.dataset.text || "";

    let cart = getCart();
    // ищем товар с таким же id и цветом
    const existing = cart.find(item => item.id === id && item.color === color);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ id, name, price, color, text, quantity: 1 });
    }

    saveCart(cart);
    alert("Товар добавлен в корзину!");
  }
});

// Отображение содержимого корзины
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalElem = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!container) return; // если это не страница корзины

  if (cart.length === 0) {
    container.innerHTML = "<p class='cart_empty'>Корзина пуста</p>";
    totalElem.textContent = "";
    checkoutBtn.classList.add("hidden");
    return;
  }


  const isMobile = window.innerWidth <= 800;

  const header = `
    <div class="cart-header">
      <span>Товар</span>
      <span>Цвет</span>
      <span>Артикул</span>
      <span>Кол-во</span>
      <span>Цена (BYN)</span>
      <span></span>
    </div>
  `;

  const itemsHTML = cart.map((item, i) => {
    if (isMobile) {
      // 📱 Мобильный вариант
      return `
        <div class="cart-item">
    <span class="cart-name">${item.name}</span>
    <span class="cart-color">Цвет: ${item.color}</span>
    <span class="cart-text">Артикул: ${item.text}</span>
    <input type="number" min="1" value="${item.quantity}" data-index="${i}" class="qty-input">
    <span class="cart-price">${parseFloat(item.price).toFixed(0)} BYN</span>
    <button class="remove" data-index="${i}">✖</button>
  </div>
      `;
    } else {
      // 💻 Десктопный вариант
      return `
       <div class="cart-item">
    <span class="cart-name">${item.name}</span>
    <span class="cart-color">${item.color}</span>
    <span class="cart-text">${item.text}</span>
    <input type="number" min="1" value="${item.quantity}" data-index="${i}" class="qty-input">
    <span class="cart-price">${parseFloat(item.price).toFixed(0)}</span>
    <button class="remove" data-index="${i}">✖</button>
  </div>
      `;
    }
  }).join("");


container.innerHTML = header + itemsHTML;

  const total = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price);
    return sum + (isNaN(priceNum) ? 0 : priceNum * item.quantity);
  }, 0);

  totalElem.textContent = `Итого: ${total.toFixed(2)} BYN`;
  checkoutBtn.classList.remove("hidden");
}

// Изменение количества и удаление товаров
document.addEventListener("input", (e) => {
  if (e.target.matches(".qty-input")) {
    const index = e.target.dataset.index;
    let cart = getCart();
    cart[index].quantity = parseInt(e.target.value);
    saveCart(cart);
    renderCart();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".remove")) {
    const index = e.target.dataset.index;
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  }

  if (e.target.id === "checkoutBtn") {
    document.getElementById("checkoutForm").classList.remove("hidden");
  }

  if (e.target.id === "sendOrder") {
    sendOrder();
  }
});

// Отправка заказа через EmailJS
function sendOrder() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone || !email) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  const cart = getCart();
  const message = cart.map(item => 
  `${item.name} — ${item.color} — ${item.text} — ${item.quantity} шт. — ${item.price}`
).join("\n");

  emailjs.send("service_9ty8iwr", "template_s6fpn1n", {
    from_name: name,
    phone,
    email,
    message
  })
  .then(() => {
    alert("Заказ успешно отправлен!");
    localStorage.removeItem("cart");
    renderCart();
    document.getElementById("checkoutForm").classList.add("hidden");
  })
  .catch(() => alert("Ошибка при отправке заказа."));
}

renderCart();