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
      const modalWindowWrapper = document.querySelector('.modal-window__wrapper');

      modalWindowBtns.forEach((modalWindowBtn) => {
         modalWindowBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSrc = modalWindowBtn.getAttribute('href');
            console.log(targetSrc);

            if (modalWindow.classList.contains('modal-window--open')) {
               modalWindow.classList.remove('modal-window--open');
            } else {
               modalWindowWrapper.insertAdjacentHTML('beforeend',
                  `<iframe src="https://www.google.com/maps/embed?pb=!4v1699706068201!6m8!1m7!1sCAoSLEFGMVFpcE1aOVlnbkFyYndFSWJUREFOZVNRWUZ1OWdOcXBXXzJTdjhGQnZZ!2m2!1d48.8606881835717!2d2.335679134426641!3f328.36!4f-2.450000000000003!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen = "" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
               modalWindow.classList.add('modal-window--open');
            }




            // modalWindow.document.querySelector('iframe').src = targetSrc;
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
