import galery1 from '../img/content/gallery/galery1.jpg';
import galery2 from '../img/content/gallery/galery2.jpg';
import galery3 from '../img/content/gallery/galery3.jpg';
import galery4 from '../img/content/gallery/galery4.jpg';
import galery5 from '../img/content/gallery/galery5.jpg';
import galery6 from '../img/content/gallery/galery6.jpg';
import galery7 from '../img/content/gallery/galery7.jpg';
import galery8 from '../img/content/gallery/galery8.jpg';
import galery9 from '../img/content/gallery/galery9.jpg';
import galery10 from '../img/content/gallery/galery10.jpg';
import galery11 from '../img/content/gallery/galery11.jpg';
import galery12 from '../img/content/gallery/galery12.jpg';
import galery13 from '../img/content/gallery/galery13.jpg';
import galery14 from '../img/content/gallery/galery14.jpg';
import galery15 from '../img/content/gallery/galery15.jpg';

document.addEventListener("DOMContentLoaded", () => {
   const burgerMenuBtn = document.querySelector('.header__bg-menu');
   const headerNav = document.querySelector('.header__nav');
   const body = document.querySelector('body');
   const overlay = document.querySelector('.overlay');
   const maxWidth = 1024;

   function openCloseModalWindow() {
      const modalWindowBtns = document.querySelectorAll('.modal-window-btn');
      const modalWindow = document.querySelector('.modal-window');
      const closeModalWindow = document.querySelector('.modal-window__btn-close');
      const modalWindowIframe = document.querySelector('.modal-window__iframe');

      modalWindowBtns.forEach((modalWindowBtn) => {
         modalWindowBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSrc = modalWindowBtn.getAttribute('href');
            console.log(targetSrc);

            modalWindowIframe.innerHTML =
               `
                  <iframe
                  src=${targetSrc}
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                     Sorry, your browser does not support this content.
                  </iframe>
               `;
            modalWindow.classList.add('modal-window--open');
            overlay.classList.add('overlay--open');
            body.classList.add('body--block');

         });
      });

      closeModalWindow.addEventListener('click', function () {
         if (modalWindow.classList.contains('modal-window--open')) {
            modalWindow.classList.remove('modal-window--open');
            modalWindowIframe.innerHTML = '';
            overlay.classList.remove('overlay--open');
            body.classList.remove('body--block');
         } else {
            return;
         };
      });
   };

   function closeBurgerMenu() {
      let curentWindowsWidth = document.documentElement.clientWidth;

      if (curentWindowsWidth > maxWidth) {
         if (headerNav.classList.contains('header__nav--open')) {
            headerNav.classList.remove('header__nav--open');
            burgerMenuBtn.classList.remove('header__bg-menu--open');
            body.classList.remove('body--block');
            overlay.classList.remove('overlay--open');
         }
      }
   }

   burgerMenuBtn.addEventListener('click', () => {
      headerNav.classList.toggle('header__nav--open');
      burgerMenuBtn.classList.toggle('header__bg-menu--open');
      body.classList.toggle('body--block');
      overlay.classList.toggle('overlay--open');
   });



   overlay.addEventListener('click', function () {
      headerNav.classList.toggle('header__nav--open');
      burgerMenuBtn.classList.toggle('header__bg-menu--open');
      body.classList.toggle('body--block');
      overlay.classList.toggle('overlay--open');
   })

   window.addEventListener('resize', closeBurgerMenu);
   openCloseModalWindow();

   $('.slider__slick').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
   });


   $('.video__slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.video__slider-nav',
      infinite: true,
      speed: 300,
   });

   $('.video__slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.video__slider',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      speed: 300,
      arrows: false,
      // centerPadding: '60px',

      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               centerMode: false,
               arrows: false,
            }
         }
      ]
   });

   const amountForm = document.querySelector('.tickets__amount-form');
   amountForm.addEventListener('click', function (event) {
      const target = event.target;
      const currentAmountInput = target.closest('.amount-form__wrapper').querySelector('.amount-form__value');
      const currentAmountInputValue = currentAmountInput.value;

      if (target.tagName == 'BUTTON') {
         const btnSymbol = target.innerText;
         console.log(btnSymbol);
      }
   });

});

//galery

function addRandomImgGalery() {

   let galeryImgAddress = [
      galery1,
      galery2,
      galery3,
      galery4,
      galery5,
      galery6,
      galery7,
      galery8,
      galery9,
      galery10,
      galery11,
      galery12,
      galery13,
      galery14,
      galery15,
   ];

   shuffleArray(galeryImgAddress);

   const galleryInnerContent = document.querySelector('.gallery__inner-content');

   for (let i = 0; i < galeryImgAddress.length; i++) {
      const img = document.createElement('img');
      img.classList.add('gallery__img');
      img.src = galeryImgAddress[i];
      img.alt = `galery${i + 1}`;
      galleryInnerContent.append(img);
   }
};

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
};

addRandomImgGalery();

