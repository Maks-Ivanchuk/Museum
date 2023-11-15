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
      // responsive: [
      //    {
      //       breakpoint: 768,
      //       settings: {
      //          arrows: false,
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //          dots: true,
      //       }
      //    },
      // ]
   });


   $('.video__slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,

   });

});
