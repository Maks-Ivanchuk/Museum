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
   const overlay = document.querySelector('#overlay');
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
            // overlay.classList.add('overlay--open');
            // body.classList.add('body--block');
            overlayOpenClose('open');
            bodyBlockUnBlock('block');

         });
      });

      closeModalWindow.addEventListener('click', function () {
         if (modalWindow.classList.contains('modal-window--open')) {
            modalWindow.classList.remove('modal-window--open');
            modalWindowIframe.innerHTML = '';
            // overlay.classList.remove('overlay--open');
            // body.classList.remove('body--block');
            overlayOpenClose('close');
            bodyBlockUnBlock('unblock');
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
            // body.classList.remove('body--block');
            bodyBlockUnBlock('unblock');
            // overlay.classList.remove('overlay--open');
            overlayOpenClose('close');
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

   //slider
   $('.slider__slick').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
   });

   //slider video
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

   //galery

   function addRandomImgGalery() {

      function shuffleArray(array) {
         for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
         }
      };

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

   addRandomImgGalery();

   //buy ticket

   function quantityTickets() {
      const amountFormButtons = document.querySelectorAll('button[data-quantity-ticket]');
      const priseBasicTickets = document.querySelectorAll('.price-basic');
      const priseSeniorTickets = document.querySelectorAll('.price-senior');
      const costBasicTicket = 17;
      const costSeniorTicket = 10;

      let currentNumTicketsBasic = 0;
      let currentNumTicketsSenior = 0;

      priseBasicTickets.forEach(priseBasicTicket => {
         priseBasicTicket.innerHTML = `${costBasicTicket} €`;
      });

      priseSeniorTickets.forEach(priseSeniorTicket => {
         priseSeniorTicket.innerHTML = `${costSeniorTicket} €`;
      });

      amountFormButtons.forEach(amountFormButton => {
         amountFormButton.addEventListener('click', (event) => {
            const target = event.target;
            const typeBtn = target.dataset.quantityTicket;
            const currentTicketsInput = target.closest('.form-btn-wrapper').querySelector('input');

            if (currentTicketsInput.id === 'amount-basic' ||
               currentTicketsInput.id === 'entry-ticket-basic') {
               if (typeBtn === 'minus' && currentNumTicketsBasic !== 0) {
                  currentNumTicketsBasic -= 1;
               } else if (typeBtn === 'plus') {
                  currentNumTicketsBasic += 1;
               } else {
                  return;
               };
               document.querySelector('#amount-basic').value = currentNumTicketsBasic;
               document.querySelector('#entry-ticket-basic').value = currentNumTicketsBasic;
               document.querySelector('#number-tickets-basic').innerHTML = currentNumTicketsBasic;

               // currentTicketsInput.value = currentNumTicketsBasic;

            } else if (currentTicketsInput.id === 'amount-senior' ||
               currentTicketsInput.id === 'entry-ticket-senior') {
               if (typeBtn === 'minus' && currentNumTicketsSenior !== 0) {
                  currentNumTicketsSenior -= 1;
               } else if (typeBtn === 'plus') {
                  currentNumTicketsSenior += 1;
               } else {
                  return;
               };

               document.querySelector('#amount-senior').value = currentNumTicketsSenior;
               document.querySelector('#entry-ticket-senior').value = currentNumTicketsSenior;
               document.querySelector('#number-tickets-senior').innerHTML = currentNumTicketsSenior;

               // currentTicketsInput.value = currentNumTicketsSenior;
            } else {
               return;
            };
            totalCostTicket();
         });
      });

      function totalCostTicket() {
         const totalAmountTickets = document.querySelector('.total');
         const totalSumBuyModal = document.querySelector('.total-sum__total');
         const totalСostBasic = document.querySelector('.total-basic-cost');
         const totalСostSenoir = document.querySelector('.total-senior-cost');

         let totalBasic = currentNumTicketsBasic * costBasicTicket;
         let totalSenior = currentNumTicketsSenior * costSeniorTicket;
         let total = (currentNumTicketsBasic * costBasicTicket) + (currentNumTicketsSenior * costSeniorTicket);
         totalСostBasic.innerHTML = `${totalBasic} €`;
         totalСostSenoir.innerHTML = `${totalSenior} €`;
         totalAmountTickets.innerHTML = total;
         totalSumBuyModal.innerHTML = `${total} €`;
      }

      function modalWbuyTicket() {
         const buyTicketNowBtn = document.querySelector('.tickets__amount-btn');
         const modalWBuyTicket = document.querySelector('.tickets-m-w');
         const closeBtnModalWBuyTicket = document.querySelector('.tickets-m-w__btn-close');

         buyTicketNowBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const target = event.target;

            if (modalWBuyTicket.closest('.tickets-m-w--open')) {
               return
            } else if (modalWBuyTicket.closest('.tickets-m-w')) {
               modalWBuyTicket.classList.add('tickets-m-w--open');
               bodyBlockUnBlock('block');
            }
         });

         closeBtnModalWBuyTicket.addEventListener('click', function (event) {
            const target = event.target;

            if (!modalWBuyTicket.closest('.tickets-m-w--open')) {
               return
            } else if (modalWBuyTicket.closest('.tickets-m-w')) {
               modalWBuyTicket.classList.remove('tickets-m-w--open')
               bodyBlockUnBlock('unblock');
            }
         });
      }

      function ticketsType() {
         const ticketsTypeForm = document.querySelector('.tickets__type-form');
         const selectorType = document.querySelector('.user-info__ticket-type');
         const purchaseselectorType = document.querySelector('.purchase-info__type');
         const inputTypeTickets = document.querySelectorAll('.tickets__type-input');

         inputTypeTickets.forEach(inputTypeTicket => {
            inputTypeTicket.addEventListener('change', () => {
               if (inputTypeTicket.checked) {
                  selectorType.value = inputTypeTicket.value;
                  purchaseselectorType.value = inputTypeTicket.value;
               }
            });
         })

         selectorType.addEventListener('change', () => {
            purchaseselectorType.value = selectorType.value;

            inputTypeTickets.forEach(inputTypeTicket => {
               if (selectorType.value === inputTypeTicket.value) {
                  inputTypeTicket.checked = true;
               }
            });
         })
      }
      modalWbuyTicket();
      ticketsType();
   };

   function bodyBlockUnBlock(action) {
      // const body = document.querySelector('body');

      if (action === 'block') {
         if (!body.classList.contains('body--block')) {
            body.classList.add('body--block');
         }
      } else if (action === 'unblock') {
         if (body.classList.contains('body--block')) {
            body.classList.remove('body--block');
         }
      } else {
         console.error('Invalid action. Use in function bodyBlockUnBlock "open" or "close".');
      }
   }

   function overlayOpenClose(action) {
      // const overlay = document.querySelector('#overlay');

      if (action === 'open') {
         if (!overlay.classList.contains('overlay--open')) {
            overlay.classList.add('overlay--open');
         }
      } else if (action === 'close') {
         if (overlay.classList.contains('overlay--open')) {
            overlay.classList.remove('overlay--open');
         }
      } else {
         console.error('Invalid action. Use in function overlayOpenClose "open" or "close".');
      }
   };


   quantityTickets();
   //  modal-buy-tickets
});


