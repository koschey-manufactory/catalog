// menu

let menu = document.getElementById("menu");
let burger = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__link')
const body = document.body;


function closeMenu() {
  menu.classList.remove("opened");
  burger.classList.remove('active');
  body.classList.remove('no-scroll');
}


function toggleMenu() {
  menu.classList.toggle("opened");
  burger.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

burger.addEventListener('click', toggleMenu);



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

    closeMenu();
  });
});

document.addEventListener('click', (e) => {
  const isMenuOpen = menu.classList.contains('opened');
  const isClickInsideMenu = menuList.contains(e.target);
  const isClickOnBurger = burger.contains(e.target);
  
  if (isMenuOpen && !isClickInsideMenu && !isClickOnBurger) {
    closeMenu();
  }
});

// Закрытие меню по нажатию Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('opened')) {
    closeMenu();
  }
});


function setMenu() {
  if (window.innerWidth > 768 && burger.classList.contains('active')) {
    menu.classList.remove("opened");
    burger.classList.remove('active');
    body.classList.remove('no-scroll');
  }
}

window.addEventListener('resize', setMenu);