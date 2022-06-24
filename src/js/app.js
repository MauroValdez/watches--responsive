
//variables

const header = document.querySelector('#header');
const navShop = document.querySelector('#cart-shop');
const navMenu = document.querySelector('#nav-menu');
const navClose = document.querySelector('#nav-close');
const navToggle = document.querySelector('#nav-toggle');
const navLink = document.querySelectorAll('.nav__link');


window.addEventListener('scroll', scrollHeader)
document.addEventListener('DOMContentLoaded', () => {
  menu();
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
}

function scrollHeader() {
  if(scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}