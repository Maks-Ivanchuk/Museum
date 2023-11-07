document.addEventListener("DOMContentLoaded", () => {
   const burgerMenuBtn = document.querySelector('.header__bg-menu');
   const headerNav = document.querySelector('.header__nav');
   const body = document.querySelector('body');
   const overlay = document.querySelector('.overlay');
   const maxWidth = 1024;


   // function openCloseModalWindowWelcom() {
   //    const btnDiscoverLouvre = document.querySelector('.welcome__info-btn');
   //    const welcomeModalWindow = document.querySelector('.welcome-modal-window');
   //    const closeWelcomModalWindow = document.querySelector('.welcome__btn-close-modal');

   //    btnDiscoverLouvre.addEventListener('click', function () {
   //       if (welcomeModalWindow.classList.contains('welcome-modal-window--open')) {
   //          welcomeModalWindow.classList.remove('welcome-modal-window--open');
   //       } else {
   //          welcomeModalWindow.classList.add('welcome-modal-window--open');
   //       }
   //    })

   //    closeWelcomModalWindow.addEventListener('click', function () {
   //       if (welcomeModalWindow.classList.contains('welcome-modal-window--open')) {
   //          welcomeModalWindow.classList.remove('welcome-modal-window--open');
   //       };
   //    });
   // };

   function openCloseModalWindow() {
      const modalWindowBtns = document.querySelectorAll('.modal-window-btn');
      const modalWindow = document.querySelector('.modal-window');
      const closeModalWindow = document.querySelector('.modal-window__btn-close');

      modalWindowBtns.forEach((modalWindowBtn) => {
         modalWindowBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSrc = modalWindowBtn.getAttribute('href');

            if (modalWindow.classList.contains('modal-window--open')) {
               modalWindow.classList.remove('modal-window--open');
            } else {
               modalWindow.classList.add('modal-window--open');
            }

            modalWindow.document.querySelector('iframe').src = targetSrc;
         });
      });

      closeModalWindow.addEventListener('click', function () {
         if (modalWindow.classList.contains('modal-window--open')) {
            modalWindow.classList.remove('modal-window--open');
         } else {
            return;
         };
      });
   };

   // document.querySelector('.visiting__item').getAttribute('href')

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
});
