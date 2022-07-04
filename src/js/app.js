import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//variables

const header = document.querySelector('#header');
const navMenu = document.querySelector('#nav-menu');
const navClose = document.querySelector('#nav-close');
const navToggle = document.querySelector('#nav-toggle');
const navLink = document.querySelectorAll('.nav__link');
const secciones = document.querySelectorAll('section[id]');
const upScroll = document.querySelector('#scroll-up');
const cart = document.querySelector('#cart');
const cartShop = document.querySelector('#cart-shop');
const cartClose = document.querySelector('#cart-close');

window.addEventListener('scroll', () => {
  scrollHeader();
  scrollActive();
  scrollUP();
})
document.addEventListener('DOMContentLoaded', () => {
  menu();
  darkMode();
})

function menu() {
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }
  if(navLink) {
    navLink.forEach( link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      })
    })
  }
  if(cartShop) {
    cartShop.addEventListener('click', () => {
      cart.classList.add('show-cart');
    })
  }
  if(cartClose) {
    cartClose.addEventListener('click', () => {
      cart.classList.remove('show-cart');
    })
  }
}

function scrollHeader() {
  if(scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

//swiper 
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: 'true',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

function scrollActive() {
  const scrollY = window.pageYOffset;

  secciones.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href="#${sectionId}"]`)
        .classList
        .add('active-link');
    } else {
      document
        .querySelector(`.nav__menu a[href="#${sectionId}"]`)
        .classList
        .remove('active-link');
    }
  });
}

function scrollUP() {
  if(scrollY >= 500) {
    upScroll.classList.add('show-scroll');
  }else {
    upScroll.classList.remove('show-scroll');
  }
}

//dark theme

function darkMode() {
  const themeButton = document.querySelector('#theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

  if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}
