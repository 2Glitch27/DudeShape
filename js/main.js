window.addEventListener("load", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });



  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;
  burger.addEventListener("click", () => {
    body.classList.toggle('no-scroll');
    burger.classList.toggle("js-active");
    menu.classList.toggle("js-active");
  });

  

  const active = document.querySelectorAll(".popular__active");
  active.forEach(active => {
    active.addEventListener("click", () => {
    active.classList.toggle("js-active");
  });
});

});