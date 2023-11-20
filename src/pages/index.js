import './index.css';

// меню
const menuButton = document.querySelector('.header__menu');
const accordion = document.querySelector('.accordion');

// слайдер
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slider__slide');
const sliderContent = document.querySelector('.slider__content');
const prevSlideButton = document.querySelector('.slider__navigation-button-back');
const nextSlideButton = document.querySelector('.slider__navigation-button-forward');
let slideNumber = document.querySelector('.slider__navigation-bar');
let count = 0;
let width;

// форма
const buttonOpenForm = document.querySelectorAll('#email');
const popupForm = document.querySelector('.popup');
const buttomCloseForm = document.querySelector('.popup__close-button');
const buttonSubmit = document.querySelector('.popup__save-button');

function init () {
  width = slider.offsetWidth;
  sliderContent.style.width = width*slide.length + 'px';
  slide.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
};

window.addEventListener('resize', init);
init();

const openMenu = () => {
  accordion.classList.toggle('accordion__opened');
  menuButton.classList.toggle('header__menu-close');
};

menuButton.addEventListener('click', openMenu);

nextSlideButton.addEventListener('click', function() {
  count++;
  slideNumber.textContent = +slideNumber.textContent + 1;
  if (count >= slide.length) {
    count = 0;
    slideNumber.textContent = 1;
  }
  rollSlider();
});

prevSlideButton.addEventListener('click', function() {
  count--;
  slideNumber.textContent = +slideNumber.textContent - 1;
  if (count < 0) {
    count = slide.length - 1;
    slideNumber.textContent = 4;
  }
  rollSlider();
});

function rollSlider() {
  sliderContent.style.transform = 'translate(-'+count*width+'px)';
};

buttonOpenForm.forEach((item) => item.addEventListener('click', function() {
  popupForm.classList.add('popup_opened');
}));

buttomCloseForm.addEventListener('click', function() {
  popupForm.classList.remove('popup_opened');
});

buttonSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  popupForm.classList.remove('popup_opened');
});
