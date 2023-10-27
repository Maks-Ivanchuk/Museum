document.addEventListener("DOMContentLoaded", () => {
   const burgerMenuBtn = document.querySelector('.header__bg-menu');
   const headerNav = document.querySelector('.header__nav');

   burgerMenuBtn.addEventListener('click', () => {
      headerNav.classList.toggle('header__nav--active');
      let curentWidth = document.documentElement.clientWidth;
      if (curentWidth > 1024) {
         if (headerNav.classList.contains('header__nav--active')) {
            console.log(curentWidth);
         };
      };
   })
});