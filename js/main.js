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
  burger.addEventListener("click", () => {
    burger.classList.toggle("js-active");
    menu.classList.toggle("js-active");
  });
});