'use strict';

// JOELS WEBSITE

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Components
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return; // guard clause - will return early if nothing is matched

  // remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade Animation
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

/////////////////////////////////////////////////////////////////////////////////
// NOTES
/////////////////////////////////////////////////////////////////////////////////

// // scrolling - top is realtive to the view port, not to the top of the page
// window.scrollTo(
//   s1coords.left + window.pageYOffset, // determines aboslute position relative to the document
//   s1coords.top + window.pageYOffset
// );

// // a better way of doing what we did above (but still old school)
// window.scrollTo({
//   left: s1coords.left + window.pageYOffset, // determines aboslute position relative to the document
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// // for testing purposes
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect);
// console.log('Current scoll (X/Y)', window.pageXOffset, window.pageYOffset);
// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

/////////////////////////////////////////////////////////////////////////////////
// // rgb(255, 255, 255)
// const randomInt = (min, max) => Math.floor(Math.random()(max - min + 1) + min);
// const randomColor = () => {
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor;
//   e.stopPropagation();
// });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {});

// document.querySelector('.nav').addEventListener('click', function (e) {});

/////////////////////////////////////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add event listener to common parent element
// 2. determine what element originated the event
