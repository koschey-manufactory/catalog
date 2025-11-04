// menu

let menu = document.getElementById("menu");
let burger = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__link')
const body = document.body;

burger.addEventListener('click', () => {
  menu.classList.toggle("opened");
  burger.classList.toggle('active');
  body.classList.toggle('no-scroll');
});



document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY;
        const headerHeight = 65;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    menu.classList.remove("opened");
    burger.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

function setMenu() {
  if (window.innerWidth > 768 && burger.classList.contains('active')) {
    menu.classList.remove("opened");
    burger.classList.remove('active');
    body.classList.remove('no-scroll');
  }
}

window.addEventListener('resize', setMenu);


//colors

const colorsMap = {
  "Олива": { style: "background-color: #4b573e;" },
  "Черный": { style: "background-color: #000000;" },
  "Мох": { style: "background-image: url('images/colors/moss.webp'); background-size: cover; background-position: center;" },
  "Койот": { style: "background-color: #A8825A;" },
  "Партизан": { style: "background-image: url('images/colors/partisan.webp'); background-size: cover; background-position: center;" },
  "ЕМР": { style: "background-image: url('images/colors/emr.webp'); background-size: cover; background-position: center;" },
  "Вудланд": { style: "background-image: url('images/colors/woodland.webp'); background-size: cover; background-position: center;" },
  "Хаки": { style: "background-color: #78866b;" },
  "Мультикам": { style: "background-image: url('images/colors/multicam.webp'); background-size: cover; background-position: center;" }
};

function getColorStyle(name) {
  return colorsMap[name]?.style || "background-color: #ccc;";
}

//effects

const sections = document.querySelectorAll('section.section'); // только <section class="section">

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // отключить, если не нужно повторное появление
    }
  });
}, {
  threshold: 0.1, // можно увеличить до 0.3–0.5 для плавности
});

sections.forEach(section => {
  observer.observe(section);
});


// switcher

const catalogContainers = document.querySelectorAll(".catalog-container");
const catalogSwitchers = document.querySelectorAll(".catalog-switcher");
const catalogItems = document.querySelectorAll(".catalog_items");

catalogContainers.forEach((container, i) => {
  container.addEventListener("click", () => {
    catalogSwitchers[i].classList.toggle("switcher-opened");
    catalogItems[i].classList.toggle("catalog-opened");
  });
});


//catalog 1

let items1 = [
    {
id: "catalog__item1",
number: "1",
colors: [
          {
            code: "1",
            name: "Олива",
            photos: [
              "images/items/item1/item1-1.jpg",
              "images/items/item1/item1-2.jpg",
              "images/items/item1/item1-3.jpg"
            ],
            price: "200 BYN / 15 804 RUB",
            text: "TV-103",
          },
          {
            code: "2",
            name: "Черный", 
            photos: [
                  "images/items/item1/item1-3.jpg",
                  "images/items/item1/item1-2.jpg",
                  "images/items/item1/item1-3.jpg"
            ],
            price: "210 BYN / 16 000 RUB",
            text: "TV-104",
          }
        ],
heading: " Тест Чехол под бронежилет TV-103",
heading2: "Чехол1 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
description: "Многофункциональный чехол под бронежилет с системой быстрого сброса, регулировкой размера и отделениями для размещения бронеэлементов. Выпускается в двух размерах и имеет дополнительную настройку размеров. Компактный медицинский EDC подсумок Шанс UP-129 рассчитан для ношения на поясном ремне, либо в качестве карманной аптечки. Производитель оставляет за собой право вносить изменения в технические характеристики, комплектацию и конструкцию, не ухудшающие эксплуатационные характеристики изделий, без предварительного уведомления.",
},
]


// catalog 2

let items2 = [

]

// Медицинские подсумки

let items6 = [
  {
id: "catalog__item2",
number: "2",
colors: [
            {
              code: "3",
                name: "Мох",
                photos: [
                  "images/items/item2/item3-1.webp",
                  "images/items/item2/item3-2.webp",
                  "images/items/item2/item3-3.webp",
                  "images/items/item2/item3-4.webp",
                  "images/items/item2/item3-5.webp",
                  "images/items/item2/item3-6.webp",
                  "images/items/item2/item3-7.webp",
                  "images/items/item2/item3-8.webp",
                  "images/items/item2/item3-9.webp",
                  "images/items/item2/item3-10.webp",
                ],
                price: "70 BYN / 1 900 RUB",
                text: "KM-0602-01-FG",
            },
        ],
heading: "Вытяжной медицинский подсумок",
heading2: "Вытяжной медицинский подсумок",
text: "KM-0602-01-FG",
},
]


// Утилитарные подсумки

let items7 = [
  {
id: "catalog__item3",
number: "3",
colors: [
            {
              code: "4",
                name: "Мох",
                photos: [
                  "images/items/item3/item4-1.webp",
                  "images/items/item3/item4-2.webp",
                  "images/items/item3/item4-3.webp",
                  "images/items/item3/item4-4.webp",
                  "images/items/item3/item4-5.webp",
                  "images/items/item3/item4-6.webp",
                  "images/items/item3/item4-7.webp",
                ],
                price: "90 BYN / 2 400 RUB",
                text: "KM-0703-01-FG",
            }
        ],
heading: "Административный подсумок",
heading2: "Административный подсумок",
text: "",
},
{
id: "catalog__item4",
number: "4",
colors: [
            {
              code: "5",
                name: "Мох",
                photos: [
                  "images/items/item4/item5-1.webp",
                  "images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp",
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-01-FG",
            },
            {
              code: "6",
                name: "Олива", 
                photos: [
                  "images/items/item4/item6-1.webp",
                  "images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp",
                ],
                price: "16 BYN / 500 RUB",
                text: "KM-0704-02-OL",
            },
            {
              code: "7",
                name: "Койот", 
                photos: [
                  "images/items/item4/item7-1.webp",
                  "images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp",
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-03-CB",
            },
            {
              code: "8",
                name: "Партизан", 
                photos: [
                  "images/items/item4/item8-1.webp",
                  "images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp", 
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-04-SM",
            },
            {
              code: "9",
                name: "ЕМР", 
                photos: [
                  "images/items/item4/item9-1.webp",
                  "images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp", 
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-05-ЕМ",
            },
            {
              code: "10",
                name: "Вудланд", 
                photos: [
                 "images/items/item4/item10-1.webp",
                 "images/items/item4/item10-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp", 
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-06-WD",
            },
                   {
                    code: "11",
                name: "Хаки", 
                photos: [
"images/items/item4/item11-1.webp",
"images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp", 
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-07-KH",
            },
                   {
                    code: "12",
                name: "Мультикам", 
                photos: [
"images/items/item4/item12-1.webp",
"images/items/item4/item12-2.webp",
"images/items/item4/item5-2.webp",
                  "images/items/item4/item5-3.webp",
                  "images/items/item4/item5-4.webp",
                  "images/items/item4/item5-5.webp",
                  "images/items/item4/item5-6.webp", 
                ],
                price: "15 BYN / 500 RUB",
                text: "KM-0704-08-MC",
            },
        ],

heading: "Подсумок-ключница",
heading2: "Подсумок-ключница плоского профиля с креплением Molle",
text: "",
description: "Отличное решение для задействования боковых ячеек Molle на рюкзаках. Внутри петля для крепления ключей, небольшого фонарика/ мультитула и т.п. В наличии расцветки: олива, мох, мультикам, койот, хаки, партизан (сс-лето), цифра, вудланд.",
},
  {
id: "catalog__item5",
number: "5",
colors: [
            {
              code: "13",
                name: "Мох",
                photos: [
                 "images/items/item5/item13-1.webp",
"images/items/item5/item13-2.webp",
                ],
                price: "100 BYN / 2 700 RUB",
                text: "KM-0705-01-FG",
            }
        ],
heading: "Подсумок-ключница Версия №2",
heading2: "Подсумок-ключница плоского профиля с креплением Molle",
text: "KM-0705-01-FG",
description: "Отличное решение для задействования боковых ячеек Molle на рюкзаках. Внутри петля для крепления ключей, небольшого фонарика/ мультитула и т.п. В наличии расцветки: олива, мох, мультикам, койот, хаки, партизан (сс-лето), цифра, вудланд.",
},

]

// Прочие подсумки

let items9 = [
  {
id: "catalog__item6",
number: "6",
colors: [
            {
              code: "14",
                name: "Мох",
                photos: [
                  "images/items/item6/item14-2.webp",
                  "images/items/item6/item14-1.webp",
                  "images/items/item6/item14-3.webp",
                  "images/items/item6/item14-4.webp",
                  "images/items/item6/item14-5.webp",
                  "images/items/item6/item14-6.webp",
                  "images/items/item6/item14-7.webp",
                ],
                price: "100 BYN / 2 700 RUB",
                text: "KM-0906-01-FG",
            }
        ],
heading: "Чехол5 под бронежилет 6094 TV-103",
text: "KM-0906-01-FG",
},
]




// function to render items
function renderCatalog(items, containerId) {
  const container = document.getElementById(containerId);
  let cards = "";

  items.forEach((item) => {
    const hasColors = item.colors && item.colors.length > 0;
    const firstColor = hasColors ? item.colors[0] : null; // ✅
    const initialPhotos = item.colors && item.colors.length > 0
      ? item.colors[0].photos
      : [item.photo1, item.photo2, item.photo3].filter(Boolean);
    let colorCircles = "";
    if (item.colors && item.colors.length > 0) {
      colorCircles = `
        <div class="color-options">
          ${item.colors
            .map(
              (color, index) => `
                <div class="color-circle${index === 0 ? ' active' : ''}" 
                     data-tooltip="${color.name}"
                     data-item-id="${item.id}"
                     data-color-name="${color.name}"
                     style="${getColorStyle(color.name)}"></div>
              `
            )
            .join("")}
        </div>
      `;
    }
    cards += `
    <div id="${item.id}" class="catalog__item">
      <div class="slider" data-slider-id="${item.number}">
        <div class="slider-controls">
          <button class="slider-button prev">
            <img src="images/icons/prev-arrow-active.svg" alt="Previous" class="slider-arrow">
          </button>
          <div class="images">
            ${initialPhotos.map(photo => `<img src="${photo}" class="item-photo">`).join("")}
          </div>
          <button class="slider-button next">
            <img src="images/icons/next-arrow-active.svg" alt="Next" class="slider-arrow">
          </button>
        </div>
        <div class="indicators"></div>
      </div>
      <p class="item-heading">${item.heading}</p>
      <p class="item-text"><span>Артикул</span>: ${item.colors && item.colors.length > 0 ? item.colors[0].text : item.text}</p>
      <p class="item-color"><span>Цвет</span>: ${item.colors && item.colors.length > 0 ? item.colors[0].name : item.color}</p>
      <p class="item-price">${item.colors && item.colors.length > 0 ? item.colors[0].price : item.price}</p>
      ${colorCircles}
      <div class="item-buttons">
      <button class="product-button" data-id="${item.id}">Подробнее</button>
      <button class="add-to-cart" 
        data-id="${item.id}" 
        data-name="${item.heading}" 
        data-text="${item.colors && item.colors.length > 0 ? item.colors[0].text : item.text}" 
        data-price="${item.colors && item.colors.length > 0 ? item.colors[0].price : item.price}"
        data-color="${item.colors && item.colors.length > 0 ? item.colors[0].name : ''}">
  В корзину
</button>
</div>
    </div>
    `;
  });

  container.innerHTML = cards;
}

renderCatalog(items1, "catalogItems1");
renderCatalog(items2, "catalogItems2");
renderCatalog(items6, "catalogItems6");
renderCatalog(items7, "catalogItems7");
renderCatalog(items9, "catalogItems9");



// slider

function initSlider(sliderElement, photos) {
  let currentSlide = 0;
  const imagesContainer = sliderElement.querySelector(".images");
  const indicatorsContainer = sliderElement.querySelector(".indicators");
  const prevButton = sliderElement.querySelector(".prev");
  const nextButton = sliderElement.querySelector(".next");
  let autoSlideInterval;

   let isTouching = false;
  let startX = 0;
  let isZooming = false;

  // Очищаем контейнеры
  imagesContainer.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  // Создаем изображения слайдера
  photos.forEach((photo, i) => {
    const img = document.createElement("img");
    img.src = photo;
    img.className = "item-photo";
    if (i === 0) img.style.display = "block";
    else img.style.display = "none";
    imagesContainer.appendChild(img);
  });

  const images = imagesContainer.querySelectorAll(".item-photo");

  // Создаем индикаторы
  photos.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "indicator";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
    indicatorsContainer.appendChild(dot);
  });

  const indicators = indicatorsContainer.querySelectorAll(".indicator");

  function showSlide(index) {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentSlide = index;
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  function startAutoSlide() {
    if (!isMobile()) {
      autoSlideInterval = setInterval(nextSlide, 2000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
  });

if (!isMobile()) {
    imagesContainer.addEventListener("mouseenter", startAutoSlide);
    imagesContainer.addEventListener("mouseleave", stopAutoSlide);
  }

  imagesContainer.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      isZooming = true;
      stopAutoSlide();
      return;
    }
    isTouching = true;
    startX = e.touches[0].clientX;
  });

  imagesContainer.addEventListener("touchmove", (e) => {
    if (isZooming) return;
    if (!isTouching) return;

    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      isTouching = false; // чтобы не листал каждый пиксель
    }
  });

  imagesContainer.addEventListener("touchend", () => {
    if (isZooming) {
      isZooming = false;
    }
    isTouching = false;
  });

  showSlide(currentSlide);

  // ✅ добавлено: проверка на мобильное устройство
  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
}

// Использование (для каждой карточки):
const products = [...items1, ...items2, ...items6, ...items7, ...items9];
document.querySelectorAll(".catalog__item").forEach(card => {
  const productId = card.id;
  const product = products.find(p => p.id === productId);
  if (!product) return;

 const photos = product.colors && product.colors.length > 0
  ? product.colors[0].photos
  : [product.photo1, product.photo2, product.photo3, product.photo4, product.photo5, product.photo6, product.photo7].filter(Boolean);

  const slider = card.querySelector(".slider");
  if (slider) {
    initSlider(slider, photos);
  }
});



// modal

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const modalHeading = document.getElementById("modal-heading");
const modalText = document.getElementById("modal-text");
const modalPrice = document.getElementById("modal-price");
const modalColor = document.getElementById("modal-color");
const modalDescription = document.getElementById("modal-description");

const modalSlider = document.querySelector('.modal-slider');
const modalIndicators = document.querySelector('.modal-indicators');
const prevButton = document.querySelector('.modal-prev');
const nextButton = document.querySelector('.modal-next');
let currentSlide = 0;



function showSlide(index) {
  const slides = modalSlider.querySelectorAll('.modal-slide');
  const indicators = modalIndicators.querySelectorAll('.modal-indicator');

  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentSlide);
  });
}


prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

function openModal(itemId, selectedColor = null) {
  const product = [...items1, ...items2, ...items6, ...items7, ...items9].find(item => item.id === itemId);
  if (!product) return;

  let colorData = null;
  if (selectedColor && product.colors) {
    colorData = product.colors.find(c => c.name === selectedColor);
  }

    currentSlide = 0;

  modalHeading.textContent = product.heading2;
  modalText.textContent = colorData ? colorData.text : product.text;
  modalPrice.textContent = colorData ? colorData.price : product.price;
  modalColor.textContent = colorData ? colorData.name : product.color;
  modalDescription.textContent = product.description || 'Нет описания';
  const modalColorOptions = modal.querySelector(".modal-color-options"); // контейнер кружков
  modalColorOptions.innerHTML = '';


  if (product.colors) {
    product.colors.forEach(color => {
      const circle = document.createElement("span");
      circle.className = "color-circle";
      circle.style.cssText = getColorStyle(color.name);
      circle.dataset.colorName = color.name;
      circle.dataset.itemId = itemId;
      circle.dataset.tooltip = color.name;
      if (colorData && colorData.name === color.name) circle.classList.add("active");

      circle.addEventListener("click", () => {
        const card = document.getElementById(itemId);
  card.dataset.selectedColor = color.name;
  openModal(itemId, color.name);
      });

      modalColorOptions.appendChild(circle);
    });
  }

    // === 🔥 САМЫЕ ГЛАВНЫЕ ИЗМЕНЕНИЯ: динамическое создание фото и индикаторов ===
   const photos = colorData 
    ? colorData.photos 
    : [product.photo1, product.photo2, product.photo3, product.photo4, product.photo5, product.photo6, product.photo7, product.photo8, product.photo9, product.photo10].filter(Boolean);


    // Очищаем и создаём слайды
    modalSlider.innerHTML = '';
    photos.forEach((photo, i) => {
      const slide = document.createElement('img');
      slide.src = photo;
      slide.className = 'modal-slide';
if (window.innerWidth >= 1024) {

  slide.addEventListener('mousemove', (e) => {
    const bounds = e.target.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  });

  slide.addEventListener('mouseleave', (e) => {
    e.target.style.transformOrigin = 'center center';
  });

  slide.addEventListener('click', (e) => {
  if (slide.classList.contains('zoomed')) {
    slide.classList.remove('zoomed');
    slide.style.transformOrigin = 'center center';
  } else {
    slide.classList.add('zoomed');
  }
});

slide.addEventListener('mousemove', (e) => {
  if (!slide.classList.contains('zoomed')) return;

  const bounds = e.target.getBoundingClientRect();
  const x = ((e.clientX - bounds.left) / bounds.width) * 100;
  const y = ((e.clientY - bounds.top) / bounds.height) * 100;
  e.target.style.transformOrigin = `${x}% ${y}%`;
});
}
      if (i === 0) slide.classList.add('active');
      modalSlider.appendChild(slide);
    });

    // Очищаем и создаём индикаторы
    modalIndicators.innerHTML = '';
    photos.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'modal-indicator';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      modalIndicators.appendChild(dot);
    });

    const card = document.getElementById(itemId);
   if (selectedColor) {
  card.dataset.selectedColor = selectedColor;
   }
    modal.classList.add("open");
    showSlide(currentSlide);
  }

closeBtn.onclick = () => {
  const activeCircle = modal.querySelector(".modal-color-options .color-circle.active");
  if (activeCircle) {
    const itemId = activeCircle.dataset.itemId;
    const colorName = activeCircle.dataset.colorName;
    updateCardColorFromModal(itemId, colorName);
  }
  
  modal.classList.remove("open");
};

window.onclick = (e) => {
  if (e.target === modal) {
    const activeCircle = modal.querySelector(".modal-color-options .color-circle.active");
    if (activeCircle) {
      const itemId = activeCircle.dataset.itemId;
      const colorName = activeCircle.dataset.colorName;
      updateCardColorFromModal(itemId, colorName);
    }

    modal.classList.remove("open");
  }
};





document.addEventListener("click", (e) => {
  // Открытие модалки
  if (e.target.matches(".product-button")) {
    const card = e.target.closest(".catalog__item");
    const activeCircle = card.querySelector(".color-circle.active");
    const selectedColor = activeCircle ? activeCircle.dataset.colorName : null;
    openModal(e.target.dataset.id, selectedColor);
  }

  // Выбор цвета в карточке
  if (e.target.classList.contains("color-circle")) {
    const card = e.target.closest(".catalog__item");
    if (!card) return;
    
    const circles = card.querySelectorAll(".color-circle");
    circles.forEach(c => c.classList.remove("active"));
    e.target.classList.add("active");

    const itemId = e.target.dataset.itemId;
    const colorName = e.target.dataset.colorName;
    const product = [...items1, ...items2, ...items6, ...items7, ...items9].find(item => item.id === itemId);
    if (!product) return;
    const colorData = product.colors.find(c => c.name === colorName);
    if (!colorData) return;

    const addBtn = card.querySelector(".add-to-cart");
    if (addBtn) {
      addBtn.dataset.color = e.target.dataset.colorName;
      addBtn.dataset.text = colorData.text || product.text;
  addBtn.dataset.price = colorData.price || product.price;
    }

    // Обновляем карточку
    const priceElem = card.querySelector(".item-price");
    const colorElem = card.querySelector(".item-color");
    const textElem = card.querySelector(".item-text");
    const slider = card.querySelector(".slider .images");
    const indicators = card.querySelector(".indicators");

    if (textElem && colorData.text) {
      textElem.innerHTML = `<span>Артикул</span>: ${colorData.text}`;
    }

    priceElem.textContent = colorData.price;
    colorElem.innerHTML = `<span>Цвет</span>: ${colorData.name}`;

    slider.innerHTML = colorData.photos
      .map(photo => `<img src="${photo}" class="item-photo">`)
      .join("");
    indicators.innerHTML = "";

    const sliderElement = card.querySelector(".slider");
    initSlider(sliderElement, colorData.photos);
  }
});

function updateCardColorFromModal(itemId, selectedColorName) {
  const product = [...items1, ...items2, ...items6, ...items7, ...items9].find(item => item.id === itemId);
  if (!product || !product.colors) return;

  const colorData = product.colors.find(c => c.name === selectedColorName);
  if (!colorData) return;

  const card = document.getElementById(itemId);
  if (!card) return;

  // Обновляем кружки
  const circles = card.querySelectorAll(".color-circle");
  circles.forEach(c => c.classList.remove("active"));
  const activeCircle = card.querySelector(`.color-circle[data-color-name="${selectedColorName}"]`);
  if (activeCircle) activeCircle.classList.add("active");

  // Обновляем цену, цвет и слайдер
  card.querySelector(".item-price").textContent = colorData.price;
  card.querySelector(".item-color").innerHTML = `<span>Цвет</span>: ${colorData.name}`;
  const textElem = card.querySelector(".item-text");
if (textElem) textElem.innerHTML = `<span>Артикул</span>: ${colorData.text || product.text}`;

  const sliderContainer = card.querySelector(".slider .images");
  sliderContainer.innerHTML = colorData.photos.map(photo => `<img src="${photo}" class="item-photo">`).join("");
  const sliderElement = card.querySelector(".slider");
  const indicators = card.querySelector(".indicators");
  indicators.innerHTML = "";

  initSlider(sliderElement, colorData.photos);
}


//mobile

let startX = 0;
let endX = 0;
let isZooming = false;

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = endX - startX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance < 0) {
      currentSlide++;
    } else {
      currentSlide--;
    }
    showSlide(currentSlide);
  }
}

modalSlider.addEventListener("touchstart", (e) => {
  if (e.touches.length > 1) {
    isZooming = true;
    return;
  }
  isZooming = false;
  startX = e.touches[0].clientX;
});

modalSlider.addEventListener("touchend", (e) => {
  if (isZooming) return;
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});




// cart


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    const color = e.target.dataset.color || "Без цвета";
    const text = e.target.dataset.text || "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Проверяем: если такой товар с этим цветом уже есть, увеличиваем количество
    const existing = cart.find(item => item.id === id && item.color === color);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ id, name, price, color, text, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Товар добавлен в корзину!");
  }
});