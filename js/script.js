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



// slider

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
      const imagesContainer = slider.querySelector(".images");
      const images = imagesContainer.querySelectorAll(".item-photo");
      const indicatorsContainer = slider.querySelector(".indicators");
      let currentIndex = 0;
      let interval;
       let isZooming = false;

      function showImage(index) {
          images.forEach((img, i) => {
              img.style.display = i === index ? "block" : "none";
          });
          updateIndicators();
      }

      function nextImage() {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
      }

      function prevImage() {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          showImage(currentIndex);
      }

      function startAutoSlide() {
          if (!interval) {
        interval = setInterval(nextImage, 2000);
      }
      }

      function stopAutoSlide() {
          clearInterval(interval);
           interval = null;
      }

      function updateIndicators() {
          const indicators = indicatorsContainer.querySelectorAll(".indicator");
          indicators.forEach((dot, i) => {
              dot.classList.toggle("active", i === currentIndex);
          });
      }

      function goToImage(index) {
          currentIndex = index;
          showImage(currentIndex);
      }

      // Создаем индикаторы
      images.forEach((_, i) => {
          const dot = document.createElement("span");
          dot.classList.add("indicator");
          dot.addEventListener("click", () => goToImage(i));
          indicatorsContainer.appendChild(dot);
      });

      // Создаем кнопки переключения с картинками
      const prevButton = slider.querySelector('.prev');
      const nextButton = slider.querySelector('.next');
      
      // Заменим текст стрелок на изображения
      prevButton.innerHTML = '<img src="images/icons/prev-arrow-active.svg" alt="Previous" class="slider-arrow">';
      nextButton.innerHTML = '<img src="images/icons/next-arrow-active.svg" alt="Next" class="slider-arrow">';

      prevButton.addEventListener("click", prevImage);
      nextButton.addEventListener("click", nextImage);

      imagesContainer.addEventListener("mouseenter", startAutoSlide);
      imagesContainer.addEventListener("mouseleave", stopAutoSlide);



 imagesContainer.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        stopAutoSlide();
        isZooming = true;
      } else {
        stopAutoSlide(); // обычный тап тоже останавливает
      }
    });

    imagesContainer.addEventListener("touchend", (e) => {
      if (e.touches.length === 0 && isZooming) {
        isZooming = false;
        startAutoSlide(); // 🔧 Возобновление после зума
      }
    });

    imagesContainer.addEventListener("touchcancel", (e) => {
      if (isZooming) {
        isZooming = false;
        startAutoSlide(); // 🔧 Возобновление после отмены зума
      }
    });

    // 🔧 Показываем первую картинку и сразу запускаем слайдер
    showImage(currentIndex);
    startAutoSlide(); // 🔧 автозапуск сразу при загрузке
  });
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
const slides = document.querySelectorAll('.modal-slide');
const prevButton = document.querySelector('.modal-prev');
const nextButton = document.querySelector('.modal-next');
const indicators = document.querySelectorAll('.modal-indicator');
let currentSlide = 0;

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) {
      slide.classList.add('active');
    }
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.remove('active');
    if (i === currentSlide) {
      indicator.classList.add('active');
    }
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

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

function openModal(itemId) {
  const product = [...items1, ...items2].find(item => item.id === itemId);
  if (product) {
    modalHeading.textContent = product.heading;
    modalText.textContent = product.text;
    modalColor.textContent = product.color;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description || 'Нет описания';
    document.getElementById('modal-photo1').src = product.photo1;
    document.getElementById('modal-photo2').src = product.photo2;
    document.getElementById('modal-photo3').src = product.photo3;
    modal.style.display = "block";
    showSlide(currentSlide);  // Инициализация слайдера
  }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Открытие модального окна при клике на продукт
document.addEventListener("click", (e) => {
  if (e.target.matches(".product-button")) {
    openModal(e.target.dataset.id);
  }
});

let autoSlideInterval;

const modalSliderWrapper = document.querySelector('.modal-slider-wrapper');

function startSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 2000); 
}

function stopSlide() {
  clearInterval(autoSlideInterval);
}

modalSliderWrapper.addEventListener('mouseover', stopSlide);
modalSliderWrapper.addEventListener('mouseout', startSlide);

modalSliderWrapper.addEventListener('touchstart', stopSlide);
modalSliderWrapper.addEventListener('touchend', startSlide);

// modalSliderWrapper.addEventListener('touchstart', (e) => {
//   if (e.touches.length > 1) {
//     stopSlide(); // если два и более пальца — это зум, останавливаем автослайдер
//   }
// });
