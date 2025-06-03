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
photo1: "images/item1.png",
photo2: "images/items/item1-1.jpg",
photo3: "images/items/item1-3.jpg",
photo4: "images/items/item1-1.jpg",
photo5: "images/items/item1-3.jpg",
heading: "Чехол1 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
description: "Многофункциональный чехол под бронежилет с системой быстрого сброса, регулировкой размера и отделениями для размещения бронеэлементов. Выпускается в двух размерах и имеет дополнительную настройку размеров. Компактный медицинский EDC подсумок Шанс UP-129 рассчитан для ношения на поясном ремне, либо в качестве карманной аптечки. Производитель оставляет за собой право вносить изменения в технические характеристики, комплектацию и конструкцию, не ухудшающие эксплуатационные характеристики изделий, без предварительного уведомления.",
},
{
  id: "catalog__item2",
  number: "2",
  photo1: "images/items/item1-1.jpg",
  photo2: "images/item1.png",
  photo3: "images/items/item1-3.jpg",
  heading: "Чехол2 под бронежилет 6094 TV-103",
  text: "TV-103-ATFGN-B2",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
{
  id: "catalog__item3",
  number: "3",
  photo1: "images/item1.png",
  photo2: "images/items/item1-1.jpg",
  photo3: "images/items/item1-3.jpg",
  heading: "Чехол3 под бронежилет 6094 TV-103",
  text: "TV-103-ATFGN-B3",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
{
  id: "catalog__item4",
  number: "4",
  photo1: "images/item1.png",
  photo2: "images/items/item1-1.jpg",
  photo3: "images/items/item1-3.jpg",
  heading: "Чехол4 под бронежилет 6094 TV-103",
  text: "TV-103-ATFGN-B4",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
]





// catalog 2

let items2 = [
  {
id: "catalog__item5",
number: "5",
photo1: "images/item1.png",
photo2: "images/items/item1-1.jpg",
photo3: "images/items/item1-3.jpg",
photo4: "images/items/item1-3.jpg",
heading: "Чехол5 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item6",
number: "6",
photo1: "images/items/item1-1.jpg",
photo2: "images/items/item1-3.jpg",
photo3: "images/item1.png",
photo4: "images/items/item1-1.jpg",
heading: "Чехол6 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B2",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item7",
number: "7",
photo1: "images/items/item1-3.jpg",
photo2: "images/items/item1-1.jpg",
photo3: "images/item1.png",
heading: "Чехол7 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B3",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
]


// Утилитарные подсумки

let items7 = [
  {
id: "catalog__item8",
number: "8",
photo1: "images/items/item8-1.webp",
photo2: "images/items/item8-2.webp",
photo3: "images/items/item8-3.webp",
photo4: "images/items/item8-4.webp",
photo5: "images/items/item8-5.webp",
photo6: "images/items/item8-6.webp",
photo7: "images/items/item8-7.webp",
heading: "Административный подсумок",
text: "TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item9",
number: "9",
photo1: "images/items/item1-1.jpg",
photo2: "images/items/item1-3.jpg",
photo3: "images/item1.png",
photo4: "images/items/item1-1.jpg",
heading: "Чехол6 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B2",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item10",
number: "10",
photo1: "images/items/item1-3.jpg",
photo2: "images/items/item1-1.jpg",
photo3: "images/item1.png",
heading: "Чехол7 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B3",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
]

// Прочие подсумки

let items9 = [
  {
id: "catalog__item11",
number: "11",
photo1: "images/item1.png",
photo2: "images/items/item1-1.jpg",
photo3: "images/items/item1-3.jpg",
photo4: "images/items/item1-3.jpg",
heading: "Чехол5 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item12",
number: "12",
photo1: "images/items/item1-1.jpg",
photo2: "images/items/item1-3.jpg",
photo3: "images/item1.png",
photo4: "images/items/item1-1.jpg",
heading: "Чехол6 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B2",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
id: "catalog__item13",
number: "13",
photo1: "images/items/item1-3.jpg",
photo2: "images/items/item1-1.jpg",
photo3: "images/item1.png",
heading: "Чехол7 под бронежилет 6094 TV-103",
text: "TV-103-ATFGN-B3",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
]




// function to render items
function renderCatalog(items, containerId) {
  const container = document.getElementById(containerId);
  let cards = "";

  items.forEach((item) => {
    cards += `
    <div id="${item.id}" class="catalog__item">
      <div class="slider" data-slider-id="${item.number}">
        <div class="slider-controls">
          <button class="slider-button prev">
            <img src="images/icons/prev-arrow-active.svg" alt="Previous" class="slider-arrow">
          </button>
          <div class="images">
            <img src="${item.photo1}" class="item-photo">
            <img src="${item.photo2}" class="item-photo">
            <img src="${item.photo3}" class="item-photo">
          </div>
          <button class="slider-button next">
            <img src="images/icons/next-arrow-active.svg" alt="Next" class="slider-arrow">
          </button>
        </div>
        <div class="indicators"></div>
      </div>
      <p class="item-heading">${item.heading}</p>
      <p class="item-text"><span>Артикул</span>: ${item.text}</p>
      <p class="item-color"><span>Цвет</span>: ${item.color}</p>
      <p class="item-price">${item.price}</p>
      <button class="product-button" data-id="${item.id}">Подробнее</button>
    </div>
    `;
  });

  container.innerHTML = cards;
}

renderCatalog(items1, "catalogItems1");
renderCatalog(items2, "catalogItems2");
renderCatalog(items7, "catalogItems7");



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
const products = [...items1, ...items2,...items7];
document.querySelectorAll(".catalog__item").forEach(card => {
  const productId = card.id;
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const photos = [product.photo1, product.photo2, product.photo3, product.photo4, product.photo5, product.photo6, product.photo7].filter(Boolean);
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

function openModal(itemId) {
  const product = [...items1, ...items2, ...items7].find(item => item.id === itemId);
  if (product) {
    currentSlide = 0;

    modalHeading.textContent = product.heading;
    modalText.textContent = product.text;
    modalColor.textContent = product.color;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description || 'Нет описания';

    // === 🔥 САМЫЕ ГЛАВНЫЕ ИЗМЕНЕНИЯ: динамическое создание фото и индикаторов ===
    const photos = [product.photo1, product.photo2, product.photo3, product.photo4, product.photo5, product.photo6, product.photo7].filter(Boolean);

    // Очищаем и создаём слайды
    modalSlider.innerHTML = '';
    photos.forEach((photo, i) => {
      const slide = document.createElement('img');
      slide.src = photo;
      slide.className = 'modal-slide';
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

    modal.classList.add("open");
    showSlide(currentSlide);
  }
}

closeBtn.onclick = () => {
  modal.classList.remove("open");
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".product-button")) {
    openModal(e.target.dataset.id);
  }
});

// let autoSlideInterval;


// function startSlide() {
//   autoSlideInterval = setInterval(() => {
//     currentSlide++;
//     showSlide(currentSlide);
//   }, 2000); 
// }

// function stopSlide() {
//   clearInterval(autoSlideInterval);
// }

// modalSlider.addEventListener('mouseenter', startSlide);
// modalSlider.addEventListener('mouseleave', stopSlide);



// modalSliderWrapper.addEventListener('touchstart', (e) => {
//   if (e.touches.length > 1) {
//     stopSlide(); // если два и более пальца — это зум, останавливаем автослайдер
//   }
// });


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
