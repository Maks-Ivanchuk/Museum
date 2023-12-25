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
   const headerWrapper = document.querySelector('.header__wrapper');
   const body = document.querySelector('body');
   const overlay = document.querySelector('#overlay');
   const maxWidth = 1024;
   const navLinks = document.querySelectorAll('.header__nav-link');

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
            overlayOpenClose('open');
            bodyBlockUnBlock('block');
         });
      });

      closeModalWindow.addEventListener('click', function () {
         if (modalWindow.classList.contains('modal-window--open')) {
            modalWindow.classList.remove('modal-window--open');
            modalWindowIframe.innerHTML = '';
            overlayOpenClose('close');
            bodyBlockUnBlock('unblock');
         } else {
            return;
         };
      });
   };

   function сloseBurgerMenuMaxWidth() {
      let curentWindowsWidth = document.documentElement.clientWidth;

      if (curentWindowsWidth > maxWidth) {
         if (headerNav.classList.contains('header__nav--open')) {
            headerNav.classList.remove('header__nav--open');
            burgerMenuBtn.classList.remove('header__bg-menu--open');
            bodyBlockUnBlock('unblock');
            overlayOpenClose('close');
         }
      }
   }

   function openCloseBurgerMenuBtn() {
      const modalWindow = document.querySelector('.modal-window');

      if (modalWindow.classList.contains('modal-window--open')) {
         return;
      }

      if (!headerNav.classList.contains('header__nav--open')) {
         headerNav.classList.add('header__nav--open');
         burgerMenuBtn.classList.add('header__bg-menu--open');
         bodyBlockUnBlock('block');
         overlayOpenClose('open');
      } else if (headerNav.classList.contains('header__nav--open')) {
         headerNav.classList.remove('header__nav--open');
         burgerMenuBtn.classList.remove('header__bg-menu--open');
         bodyBlockUnBlock('unblock');
         overlayOpenClose('close');
      };
   }

   function clickOverlay() {
      const modalWindow = document.querySelector('.modal-window');

      if (modalWindow.classList.contains('modal-window--open')) {
         return;
      }

      if (overlay.classList.contains('overlay--open')) {
         overlayOpenClose('close');

         if (headerNav.classList.contains('header__nav--open')) {
            headerNav.classList.remove('header__nav--open')
         };

         if (burgerMenuBtn.classList.contains('header__bg-menu--open')) {
            burgerMenuBtn.classList.remove('header__bg-menu--open');
         };

         if (body.classList.contains('body--block')) {
            bodyBlockUnBlock('unblock');
         };
      } else {
         return;
      };
   };

   function clickNavItemScrollToSection() {
      const modalWindow = document.querySelector('.modal-window');
      const modalWindowIframe = document.querySelector('.modal-window__iframe');

      let heightHeader = "";
      let anchorTagretOffsetTop = "";
      let anchorTagretScroll = "";

      navLinks.forEach((navLink) => {
         navLink.addEventListener('click', (event) => {
            event.preventDefault();

            if (modalWindow.classList.contains('modal-window--open')) {
               modalWindow.classList.remove('modal-window--open');
               modalWindowIframe.innerHTML = '';
               overlayOpenClose('close');
               bodyBlockUnBlock('unblock');
            }

            heightHeader = headerWrapper.offsetHeight;
            anchorTagretOffsetTop = document.querySelector(event.target.getAttribute('href')).offsetTop;
            anchorTagretScroll = anchorTagretOffsetTop - heightHeader;

            window.scrollTo({
               top: anchorTagretScroll,
               behavior: 'smooth'
            });

            window.addEventListener('resize', function () {
               heightHeader = headerWrapper.offsetHeight;
               anchorTagretOffsetTop = document.querySelector(event.target.getAttribute('href')).offsetTop;
               anchorTagretScroll = anchorTagretOffsetTop - heightHeader;

               window.scrollTo({
                  top: anchorTagretScroll,
                  behavior: 'instant'
               });
            });

            if (!headerNav.classList.contains('header__nav--open')) {
               return;
            } else if (headerNav.classList.contains('header__nav--open')) {
               headerNav.classList.remove('header__nav--open');
               burgerMenuBtn.classList.remove('header__bg-menu--open');
               bodyBlockUnBlock('unblock');
               overlayOpenClose('close');
            };
         });
      });
   };

   overlay.addEventListener('click', clickOverlay);
   burgerMenuBtn.addEventListener('click', openCloseBurgerMenuBtn);
   window.addEventListener('resize', сloseBurgerMenuMaxWidth);
   openCloseModalWindow();
   clickNavItemScrollToSection();


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

   //stop video in slider
   $('.video__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      stopVideo();
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


   let currentNumTicketsBasic = 0;
   let currentNumTicketsSenior = 0;

   function quantityTickets() {
      const amountFormButtons = document.querySelectorAll('button[data-quantity-ticket]');
      const priseBasicTickets = document.querySelectorAll('.price-basic');
      const priseSeniorTickets = document.querySelectorAll('.price-senior');
      const costBasicTicket = 17;
      const costSeniorTicket = 10;



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


      // const buyTicketNowBtn = document.querySelector('.tickets__amount-btn');
      // const modalWBuyTicket = document.querySelector('.tickets-m-w');
      // const closeBtnModalWBuyTicket = document.querySelector('.tickets-m-w__btn-close');

      // function openCloseModWindowBuyTicket() {
      //    buyTicketNowBtn.addEventListener('click', function (event) {
      //       event.preventDefault();

      //       if (!modalWBuyTicket.closest('.tickets-m-w--open')) {
      //          modalWBuyTicket.classList.add('tickets-m-w--open');
      //          bodyBlockUnBlock('block');
      //       } else if (modalWBuyTicket.closest('.tickets-m-w')) {
      //          return
      //       }
      //    });

      //    closeBtnModalWBuyTicket.addEventListener('click', function () {

      //       if (!modalWBuyTicket.closest('.tickets-m-w--open')) {
      //          return
      //       } else if (modalWBuyTicket.closest('.tickets-m-w--open')) {
      //          modalWBuyTicket.classList.remove('tickets-m-w--open')
      //          bodyBlockUnBlock('unblock');
      //       };
      //    });
      // };

      function selectTicketsInfo() {
         const selectDate = document.querySelector('.user-info__date');
         const finalDate = document.querySelector('.purchase-info__date');
         const selectTime = document.querySelector('.user-info__time');
         const finalTime = document.querySelector('.purchase-info__time');
         const selectorType = document.querySelector('.user-info__ticket-type');
         const purchaseselectorType = document.querySelector('.purchase-info__type');
         const inputTypeTickets = document.querySelectorAll('.tickets__type-input');

         selectDate.addEventListener('change', () => {
            finalDate.value = selectDate.value;
         });

         selectTime.addEventListener('change', () => {
            finalTime.value = selectTime.value;
         });

         inputTypeTickets.forEach(inputTypeTicket => {
            inputTypeTicket.addEventListener('change', () => {
               selectorType.value = inputTypeTicket.value;
               purchaseselectorType.value = inputTypeTicket.value;
            });
         })

         selectorType.addEventListener('change', () => {
            purchaseselectorType.value = selectorType.value;

            inputTypeTickets.forEach(inputTypeTicket => {
               if (selectorType.value === inputTypeTicket.value) {
                  inputTypeTicket.checked = true;
               };
            });
         });
      };

      openCloseModWindowBuyTicket();
      selectTicketsInfo();
   };

   const buyTicketNowBtn = document.querySelector('.tickets__amount-btn');
   const modalWBuyTicket = document.querySelector('.tickets-m-w');
   const closeBtnModalWBuyTicket = document.querySelector('.tickets-m-w__btn-close');



   //form by tickets
   const btnSubBuyTicketsForm = document.querySelector('.purchase-info__btn');
   let orderId = 0;
   let dataTickets = {};

   const userInfoForm = document.querySelector('.user-info__form');
   const purchaseInfoForm = document.querySelector('.purchase-info__card-form');
   const date = userInfoForm.elements['tickets-date'];
   const time = userInfoForm.elements['tickets-time'];
   const userName = userInfoForm.elements['user-name'];
   const email = userInfoForm.elements['user-email'];
   const phone = userInfoForm.elements['user-phone'];
   const ticketType = userInfoForm.elements['ticket-type'];
   const numberTiketsBasic = document.querySelector('#entry-ticket-basic');
   const numberTiketsSenior = document.querySelector('#entry-ticket-senior');
   const totalSumOrder = document.querySelector('.total-sum__total');
   const cardNum = purchaseInfoForm.elements['card-num'];
   const cardMonth = purchaseInfoForm.elements['card-month'];
   const cardYear = purchaseInfoForm.elements['card-year'];
   const cardHolderName = purchaseInfoForm.elements['cardholder-name'];
   const cardCvv = purchaseInfoForm.elements['card-cvv'];

   userName.addEventListener('input', function () {
      let inputValue = this.value;
      const validInput = inputValue.replace(/[^a-zA-Zа-щью-яА-ЩЬЮ\s-]/gu, '');
      const formattedInput = validInput.replace(/\b\w/g, (match) => match.toUpperCase());
      const words = formattedInput.split(' ');
      const modifiedWords = words.map(word => {
         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      const finalFormattedInput = modifiedWords.join(' ');
      this.value = finalFormattedInput;
   });

   phone.addEventListener('input', function () {
      let inputValue = this.value;
      const cleanedValue = inputValue.replace(/\D/g, '');

      if (cleanedValue.length <= 12) {
         this.value = cleanedValue;
      } else {

         this.value = cleanedValue.slice(0, 12);
      }
   });

   // cardNum.addEventListener('input', function () {
   //    let inputValue = this.value;
   //    if (inputValue.length % 4 === 0 &&
   //       inputValue.length < 16) {
   //       inputValue = inputValue + '-';
   //    } else {
   //       inputValue = inputValue;
   //    }
   // });




   function submitFormBuyTickets(event) {
      event.preventDefault();

      function validForms() {
         let error = 0;

         const formReg = document.querySelectorAll('._reg');
         const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ']+([- ][A-Za-zА-Яа-яІіЇїЄєҐґ']+)*$/;
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         const phoneRegex = /^380\d{9}$/;


         formReg.forEach(reg => {
            if (reg.length == 0 || reg.value == 0) {
               error++;
               reg.classList.add('invalid');
            } else {
               switch (reg.name) {
                  case 'tickets-date':
                     if (reg.value == '') {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Дата гуд`);
                     }
                     break;
                  case 'tickets-time':
                     if (reg.value == '') {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Час гуд`);
                     }
                     break;
                  case 'user-name':
                     if (!nameRegex.test(reg.value)) {
                        error++;
                        console.log(`Введено некоректне ім'я`);
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Ім'я гуд`);
                     }
                     break;
                  case 'user-email':
                     if (!emailRegex.test(reg.value)) {
                        error++;
                        console.log(`Введено некоректний E-mail`);
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`E-mail гуд`);
                     }
                     break;
                  case 'user-phone':
                     if (!phoneRegex.test(reg.value)) {
                        error++;
                        console.log(`Введено некоректний Phone`);
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Phone гуд`);
                     }
                     break;
                  case 'ticket-type':
                     if (reg.value == '') {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Тип виставки гуд`);
                     }
                     break;
                  case 'tickets-num-basic':
                     if (reg.value == 0) {
                        error++;
                        console.log(`Оберіть к-ть квитків Басік`);
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Басік гуд`);
                     }
                     break;
                  case 'tickets-num-senior':
                     if (reg.value == 0) {
                        error++;
                        console.log(`Оберіть к-ть квитків Сенйор`);
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Сенйор гуд`);
                     }
                     break;
                  case 'card-num':
                     if (reg.value.length == 0 || reg.value.length != 16) {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Номер карти гуд`);
                     }
                     break;
                  case 'card-month':
                     if (reg.value == '') {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log('Місяць карти гуд');
                     }
                     break;
                  case 'card-year':
                     if (reg.value == '') {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log('Рік карти гуд');
                     }
                     break;
                  case 'cardholder-name':
                     if (!nameRegex.test(reg.value)) {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`Ім'я гуд`);
                     }
                     break;
                  case 'card-cvv':
                     if (reg.value.length == 0 || reg.value.length != 3) {
                        error++;
                        if (!reg.classList.contains('invalid')) {
                           reg.classList.add('invalid');
                        }
                     } else {
                        if (reg.classList.contains('invalid')) {
                           reg.classList.remove('invalid');
                        }
                        console.log(`CVV карти гуд`);
                     }
                     break;
               }

            }
         })

         if (error > 0) {
            console.log(error);
            error = 0;
            return false;
         } else {
            return true;
         }
      }

      // validForms();

      if (!validForms()) {
         console.log(`Заповність обов'язкові поля`);
         return;
      } else {
         console.log(`Форму заповнено колектно.`);
      }

      //інфо про придбаний квиток, к-ть та юзера
      orderId += 1;

      let orderName = `order#${orderId}`;

      dataTickets[orderName] = {

         date: date.value,
         time: time.value,
         name: userName.value,
         email: email.value,
         phone: phone.value,
         typeExhibition: ticketType.value,
         numberTiketsBasic: numberTiketsBasic.value,
         numberTiketsSenior: numberTiketsSenior.value,
         totalSumOrder: totalSumOrder.textContent.slice(0, -2),
         cardNum: cardNum.value,
         cardMonth: cardMonth.value,
         cardYear: cardYear.value,
         cardHolderName: cardHolderName.value,
         cardCvv: cardCvv.value,
      };

      console.log(dataTickets); //тест інфи, що зібрали

      // закриття форми після проходження валідації та відправки данних
      // modalWBuyTicket.classList.remove('tickets-m-w--open');//тимчасово  скрито, щоб не заважало
      // bodyBlockUnBlock('unblock');//тимчасово  скрито, щоб не заважало

      // додати очищення полів
      // date.value = "";
      // time.value = "";
      // userName.value = "";
      // email.value = "";
      // phone.value = "";
      // ticketType.value = "";
      // currentNumTicketsBasic = 0;
      // currentNumTicketsSenior = 0;
      // numberTiketsBasic.value = "0";
      // numberTiketsSenior.value = "0";
      // totalSumOrder = "0";
      // cardNum.value = "";
      // cardMonth.value = "";
      // cardYear.value = "";
      // cardHolderName.value = "";
      // cardCvv.value = "";


   };

   quantityTickets();

   btnSubBuyTicketsForm.addEventListener('click', submitFormBuyTickets);

   function openCloseModWindowBuyTicket() {
      buyTicketNowBtn.addEventListener('click', function (event) {
         event.preventDefault();

         if (!modalWBuyTicket.closest('.tickets-m-w--open')) {
            modalWBuyTicket.classList.add('tickets-m-w--open');
            bodyBlockUnBlock('block');
         } else if (modalWBuyTicket.closest('.tickets-m-w')) {
            return
         }
      });

      closeBtnModalWBuyTicket.addEventListener('click', function () {

         if (!modalWBuyTicket.closest('.tickets-m-w--open')) {
            return
         } else if (modalWBuyTicket.closest('.tickets-m-w--open')) {
            modalWBuyTicket.classList.remove('tickets-m-w--open')
            bodyBlockUnBlock('unblock');
         };
      });
   };

   function bodyBlockUnBlock(action) {
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
   };

   function overlayOpenClose(action) {
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
});

































//YT API

let players = [];

window.onYouTubeIframeAPIReady = function () {
   const videosSlider = document.querySelectorAll('.video__slider-item');
   videosSlider.forEach((videoSlider) => {
      if (
         videoSlider.id == 'playerSliderYT1' ||
         videoSlider.id == 'playerSliderYT2' ||
         videoSlider.id == 'playerSliderYT3' ||
         videoSlider.id == 'playerSliderYT4' ||
         videoSlider.id == 'playerSliderYT5'
      ) {
         const player = new YT.Player(videoSlider.id, {
            videoId: videoSlider.dataset.videoId,
         });
         players.push(player);
      }
   });
};

function stopVideo() {
   players.forEach(player => {
      if (player && typeof player.stopVideo === 'function') {
         player.stopVideo();
      }
   });
}