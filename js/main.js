window.onload = () => {
   const burger = document.querySelector(".nav__icon");
   const navList = document.querySelector('.nav__list');
   const nav = document.querySelector('.nav');

   burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      navList.classList.toggle('active');
      burger.classList.toggle('active');
   })
};

